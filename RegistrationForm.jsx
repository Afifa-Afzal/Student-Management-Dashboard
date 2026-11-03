import { useState } from "react";

function RegistrationForm({ onAddStudent }) {
  const [formData, setFormData] = useState({ name: "", email: "", department: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.department) {
      alert("Please fill in all fields");
      return;
    }
    onAddStudent(formData);
    setFormData({ name: "", email: "", department: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit} id="register">
      <h2>Register Student</h2>
      <input name="name" placeholder="Full name" value={formData.name} onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;