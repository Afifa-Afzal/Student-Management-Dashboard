const links = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Students", href: "#students" },
  { id: 3, label: "Courses", href: "#courses" },
  { id: 4, label: "Register", href: "#register" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;