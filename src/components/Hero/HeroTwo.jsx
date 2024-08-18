import { heroTwo as hero } from "@/data/hero";
import { courseHighlightsUI as courseUIUX } from "@/data/course";

import ShapeLeft from "/assets/imgs/shape/shape-left.webp";
import ShapeRight from "/assets/imgs/shape/shape-right.webp";
import ShapeBottom from "/assets/imgs/shape/shape-btm.webp";
import HeroImg from "/assets/imgs/hero/heroImgNew.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";

export default function HeroOne() {
  return (
    <section className="hero__area">
      <div className="hero__wrapper">
        <div className="hero__left">
          {hero.title && (
            <>
              <h1 className="hero__title move-line-3d">
                {hero.title.sliceOne}
                {/* <span className="course-shape"> {hero.title.sliceTwo} </span> */}
                {/* <span> {hero.title.sliceFour}</span> */}
              </h1>
              <h1
                className="small-hero__title"
                style={{
                  color: "#fffc",
                  fontSize: "26px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: "660px",
                  marginTop: "10px",
                }}
              >
                {hero.title.sliceThree}
              </h1>
            </>
          )}
          {hero.description && (
            <p className="hero__content fade-slide top" data-slide-amount="20">
              {hero.description}
            </p>
          )}
        </div>
        <div className="hero__right ">
          <img className="hero__img-new" src={HeroImg} alt="Icon" />
        </div>
      </div>
      {/* Course Info */}
      <div className="hero__course-info-container">
        <div className="hero__course-info">
          {courseUIUX.info.map((item, index) => (
            <>
              <div className="hero__course-info-item" key={index}>
                <h3 className="hero__course-info-title">{item?.title}</h3>
                <p className="hero__course-info-content">{item?.details}</p>
              </div>
              {index === courseUIUX.info.length - 1 ? null : (
                <hr className="hero__course-info-hr" />
              )}
            </>
          ))}
          <div className="hero__course-info-item">
            <button className="hero__course-info-button">Apply Now</button>
          </div>
        </div>
      </div>
      {/* <!-- Shape image  --> */}
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
