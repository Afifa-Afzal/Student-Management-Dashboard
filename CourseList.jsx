function CourseList({ courses }) {
  return (
    <section id="courses">
      <h2>Courses</h2>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id}>
            {course.title} <span>({course.credits} credits)</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CourseList;