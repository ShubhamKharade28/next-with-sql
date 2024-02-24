"use client";
import { useState, useEffect } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let apiRes = await fetch("/api/student-list");
    apiRes = await apiRes.json();

    if (apiRes.success) {
      setStudents(apiRes.studentList);
    } else {
      setStudents([]);
    }
  };

  const onDeleteHandler = async (id) => {
    let apiRes = await fetch("/api/delete-student", {
      method: "POST",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    apiRes = await apiRes.json();

    if (apiRes.success) {
      setStudents((prev) => {
        const newStudents = prev.filter((student) => student.id != id);
        return newStudents;
      });
    } else {
      alert("Failed to remove student");
    }
  };

  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-7">
      <h1 className="text-2xl font-bold relative">Students
        <button 
          className="absolute left-44 text-sm text-green-500 top-2"
          onClick={getData}
        >refresh</button>
      </h1>
      {students.length > 0 && (
        <table className="text-lg py-7">
          <tr>
            <th className="py-2 px-3">Sr.</th>
            <th className="py-2 px-3">Name</th>
            <th className="py-2 px-3">Email</th>
          </tr>
          {students.map((student, index) => {
            return (
              <tr id={student.id}>
                <td className="py-2 px-3">{index + 1}.</td>
                <td className="py-2 px-3">{student.name}</td>
                <td className="py-2 px-3">{student.email}</td>
                <td
                  onClick={(e) => {
                    e.preventDefault();
                    onDeleteHandler(student.id);
                  }}
                  className="px-3"
                >
                  <span className="font-bold bg-red-600 px-2 pb-1 rounded-lg text-white text-lg cursor-pointer hover:bg-red-400 ">
                    x
                  </span>
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
};

export default StudentList;
