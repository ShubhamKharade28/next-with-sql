"use client";
import { useState } from "react";

const AddStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onClickAddHandler = async (e) => {
    e.preventDefault();
    let apiRes = await fetch('/api/add-student', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name,email}),
    });

    apiRes = await apiRes.json();
    if(apiRes.success){
      alert("Student added successfully");
    }else{
      alert("Failed to add student");
    }
  }

  return (
    <div className="flex flex-col h-full items-center gap-12 w-1/2">
      <h1 className="text-2xl font-bold">Add student</h1>
      <form className="flex flex-col text-lg w-full items-center gap-3">
        <input
          type="text"
          placeholder="Name"
          className="outline-none border-2 border-black rounded-md py-2 px-5 w-1/2"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="Email"
          className="outline-none border-2 border-black rounded-md px-5 py-2 w-1/2"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button 
          className="hover:bg-gray-200 hover:text-black
          bg-black rounded-lg py-2 px-7 my-7 transition-all duration-150 text-white"
          onClick={onClickAddHandler}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddStudent;