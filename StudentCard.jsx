function StudentCard({ name, email, department }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>📧 {email}</p>
      <p>🎓 {department}</p>
    </div>
  );
}

export default StudentCard;