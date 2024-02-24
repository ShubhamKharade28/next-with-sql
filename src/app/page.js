import AddStudent from "./components/add-student";
import StudentList from "./components/student-list";

const Home = () => {
  return (
    <main className="flex items-center justify-around w-screen min-h-screen px-32">
      <AddStudent />
      <StudentList />
    </main>
  );
};

export default Home;
