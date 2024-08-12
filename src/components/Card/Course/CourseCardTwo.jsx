import PropTypes from "prop-types";

CourseCardOne.propTypes = {
  course: PropTypes.object,
};

export default function CourseCardOne({ course }) {
  return (
    <div className="course__item">
      <div className="course__thumb-wrap">
        <img className="course__thumb" src={course.image} alt="Course" />
      </div>
      {course.title && course.company && (
        <h3 className="course__title">
          {course.title}, {course.company}
        </h3>
      )}
    </div>
  );
}
