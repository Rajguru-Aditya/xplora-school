import PropTypes from "prop-types";
import { Link } from "react-router-dom";

AdmissionCard.propTypes = {
  type: PropTypes.string,
  process: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number,
  screenWidth: PropTypes.number,
};

export default function AdmissionCard({
  type,
  process,
  data,
  index,
  screenWidth,
}) {
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
      {index !== data.process.length - 1 &&
        (screenWidth < 700 || screenWidth > 1060) && (
          <img
            src="https://img.icons8.com/hieroglyphs/100/FFFFFF/right.png"
            alt="right arrow"
            className="admissionProcess__usp-arrow"
          />
        )}
    </div>
  );
}
