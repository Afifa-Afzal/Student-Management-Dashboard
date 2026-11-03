import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import CourseList from "./components/CourseList";
import RegistrationForm from "./components/RegistrationForm";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import "./App.css";

const initialStudents = [
  { id: 1, name: "Ali Khan", email: "ali@example.com", department: "Computer Science" },
  { id: 2, name: "Sara Ahmed", email: "sara@example.com", department: "Software Engineering" },
  { id: 3, name: "Usman Raza", email: "usman@example.com", department: "Data Science" },
];

const courses = [
  { id: 1, title: "Web Development", credits: 3 },
  { id: 2, title: "Data Structures", credits: 4 },
  { id: 3, title: "Database Systems", credits: 3 },
];

function App() {
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  const addStudent = (newStudent) => {
    setStudents([...students, { id: Date.now(), ...newStudent }]);
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`app ${theme}`}>
      <Header
        title="Student Management Dashboard"
        theme={theme}
        onToggleTheme={toggleTheme}
        isLoggedIn={isLoggedIn}
        onToggleLogin={toggleLogin}
      />
      <Navbar />

      <main>
        <SearchBar onSearch={setSearchTerm} />

        <section id="students">
          <h2>Students ({filteredStudents.length})</h2>
          <div className="card-grid">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((s) => (
                <StudentCard key={s.id} name={s.name} email={s.email} department={s.department} />
              ))
            ) : (
              <p>No students found.</p>
            )}
          </div>
        </section>

        <CourseList courses={courses} />

        {isLoggedIn ? (
          <RegistrationForm onAddStudent={addStudent} />
        ) : (
          <p className="notice">🔒 Please log in to register a new student.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;