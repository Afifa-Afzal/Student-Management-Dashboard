# 🎓 Student Management Dashboard

A responsive dashboard built with **React** to manage student information, courses, and registrations. Developed as an individual practical lab to practice core React concepts.

## ✨ Features

- **Header & Navbar:** reusable components with navigation links
- **Student Cards:** display student info using props
- **Course List:** rendered dynamically with `map()` and unique keys
- **Registration Form:** controlled inputs with validation
- **Live Search:** filter students by name
- **Theme Toggle:** switch between light and dark mode using `useState`
- **Login/Logout:** conditional rendering of messages and the registration form
- **Footer:** reusable footer component

## 🛠️ Tech Stack

- React (Hooks)
- JSX
- Vite
- CSS3

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── StudentCard.jsx
│   ├── CourseList.jsx
│   ├── RegistrationForm.jsx
│   ├── SearchBar.jsx
│   └── Footer.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## 📚 React Concepts Covered

| Concept | Where used |
|---|---|
| Props | Header, StudentCard, CourseList, RegistrationForm |
| State (`useState`) | Theme, login status, students, search, form data |
| Event Handling | onClick, onChange, onSubmit |
| List Rendering + Keys | Navbar, students, courses |
| Conditional Rendering | Login message, registration form, empty search result |
| Lifting State Up | Adding students from the form to the App |

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/student-dashboard.git

# Go to the project folder
cd student-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

## 🔮 Future Improvements

- Edit and delete students
- Backend integration (Node.js + MongoDB)
- Form validation messages
- Persist data with localStorage

