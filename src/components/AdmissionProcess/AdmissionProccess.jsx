import { AdmissionOne as data } from "@/data/admission";
import InstructorCardOne from "@/components/Card/Instructor/InstructorCardOne";
import PropTypes from "prop-types";
import ShapeLeft from "/assets/imgs/shape/shape-left.webp";
import ShapeRight from "/assets/imgs/shape/shape-right.webp";
import ShapeBottom from "/assets/imgs/shape/shape-btm.webp";
import coverbg from "../../assets/imgs/gallery/coverbg.png";
import AdmissionCard from "./AdmissionCard";

AdmissionProcess.propTypes = {
  type: PropTypes.string,
  spacingClass: PropTypes.string,
};

export default function AdmissionProcess({
  type = "",
  spacingClass = "pt-110",
}) {
  return (
    <section
      className={`admissionProcess__area${
        type ? `-${type}` : ""
      } ${spacingClass}`}
    >
      {type !== "2" && (
        <img
          src={coverbg}
          alt="cover image"
          className="admissionProcess__bg-img"
        />
      )}
      <div className="container">
        <div className={`admissionProcess__top-wrap${type ? `-${type}` : ""}`}>
          {data.title && (
            <h2 className="section-title move-line-3d">
              {data.title.sliceOne}
            </h2>
          )}
          {data.description && (
            <p className="admissionProcess__description fade-slide bottom">
              {data.description.sliceOne}
              <span> {data.description.sliceTwo}</span>
              {data.description.sliceThree}
            </p>
          )}
        </div>
        {data.process && data.process.length > 0 && (
          <div className="admissionProcess__usp-item-container">
            {data.process.map((prs, index) => (
              <div
                key={index}
                className={`admissionProcess__usp-item ${prs.animation.classes}`}
                data-delay={prs.animation.delay}
                data-duration={prs.animation.duration}
              >
                <AdmissionCard type={type} process={prs} />
              </div>
            ))}
          </div>
        )}
      </div>
      <img className="hero__shape-left moveBottom" src={ShapeLeft} alt="Icon" />
      <img
        className="hero__shape-right moveBottom"
        src={ShapeRight}
        alt="Icon"
      />
      <img className="hero__shape-btm moveLeft" src={ShapeBottom} alt="Icon" />
    </section>
  );
}
