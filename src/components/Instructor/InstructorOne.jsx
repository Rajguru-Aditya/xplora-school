import { instructorOne as data } from "@/data/instructor";
import InstructorCardOne from "@/components/Card/Instructor/InstructorCardOne";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ShapeLeft from "/assets/imgs/shape/shape-left.webp";
import ShapeRight from "/assets/imgs/shape/shape-right.webp";
import ShapeBottom from "/assets/imgs/shape/shape-btm.webp";
import coverbg from "../../assets/imgs/gallery/coverbg.png";

InstructorOne.propTypes = {
  type: PropTypes.string,
  spacingClass: PropTypes.string,
};

export default function InstructorOne({ type = "", spacingClass = "pt-110" }) {
  return (
    <section className={`team__area${type ? `-${type}` : ""} ${spacingClass}`}>
      {type !== "2" && (
        <img src={coverbg} alt="cover image" className="team__bg-img" />
      )}
      <div className="container">
        <div className={`team__top-wrap${type ? `-${type}` : ""}`}>
          {data.title && (
            <h2 className="section-title move-line-3d">
              {data.title.sliceOne} <span>{data.title.sliceTwo}</span>
            </h2>
          )}
        </div>
        {data.instructors && data.instructors.length > 0 && (
          <div className="team__usp-item-container">
            {data.instructors.map((instructor, index) => (
              <div
                key={index}
                className={`team__usp-item ${instructor.animation.classes}`}
                data-delay={instructor.animation.delay}
                data-duration={instructor.animation.duration}
              >
                <InstructorCardOne type={type} instructor={instructor} />
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
