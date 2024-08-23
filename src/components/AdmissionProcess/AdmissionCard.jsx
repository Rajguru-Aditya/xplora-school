import PropTypes from "prop-types";
import { Link } from "react-router-dom";

AdmissionCard.propTypes = {
  type: PropTypes.string,
  process: PropTypes.object,
};

export default function AdmissionCard({ type, process }) {
  return (
    <div className={`admissionProcess__item${type ? `-${type}` : ""}`}>
      {process.title && (
        <h3 className={`admissionProcess__name${type ? `-${type}` : ""}`}>
          {process.title}
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
      {process.desc && (
        <h4
          className={`admissionProcess__designation${type ? `-${type}` : ""}`}
        >
          {process.desc}
        </h4>
      )}
    </div>
  );
}
