function Header({ title, theme, onToggleTheme, isLoggedIn, onToggleLogin }) {
  return (
    <header className="header">
      <h1>{title}</h1>

      {/* Conditional login/logout message */}
      <p>{isLoggedIn ? "Welcome back, Admin! 👋" : "You are logged out. Please log in."}</p>

      <div className="header-buttons">
        <button onClick={onToggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
        <button onClick={onToggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
      </div>
    </header>
  );
}

export default Header;
