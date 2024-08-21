import PropTypes from "prop-types";
import { Link } from "react-router-dom";

InstructorCardOne.propTypes = {
  type: PropTypes.string,
  instructor: PropTypes.object,
};

export default function InstructorCardOne({ type, instructor }) {
  return (
    <div className={`team__item${type ? `-${type}` : ""}`}>
      {instructor.title && (
        <h3 className={`team__name${type ? `-${type}` : ""}`}>
          {instructor.title}
        </h3>
      )}
      <hr
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#ccc",
          border: "none",
          margin: "0.5rem 0",
          opacity: "1",
        }}
      />
      {instructor.designation && (
        <h4 className={`team__designation${type ? `-${type}` : ""}`}>
          {instructor.designation}
        </h4>
      )}
    </div>
  );
}
