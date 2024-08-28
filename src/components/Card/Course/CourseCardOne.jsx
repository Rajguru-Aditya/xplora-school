import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CourseCardOne.propTypes = {
  course: PropTypes.object,
};

export default function CourseCardOne({ course }) {
  return (
    <div className="course__item">
      <div className="course__thumb-wrap-1">
        <img className="course__thumb" src={course.image} alt="Course" />
      </div>
      {/* {course.categories && course.categories.length > 0 && (
        <Link className="btn-trending" to={course.categories[0].link}>
          <i className="ph ph-fire-simple"></i>
          {course.categories[0].name}
        </Link>
      )} */}
      {course.meta && (
        <ul className="course__meta d-flex gap-3">
          {course.meta.map((metaItem, index) => (
            <li key={index} className="course__meta-item">
              {metaItem.icon && <img src={metaItem.icon} alt="Icon" />}
              {metaItem.description && <span>{metaItem.description}</span>}
            </li>
          ))}
        </ul>
      )}
      {course.title && <h3 className="course__title">{course.title}</h3>}
      <Link className="btn-enroll btn-hover-shadow" to={course.link}>
        {course.enrollBtnText}
        <img className="btn-enroll-icon" src={course.arrowIcon} alt="Icon" />
      </Link>
    </div>
  );
}
