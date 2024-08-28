import { courseHighlightsUI as courseUIUX } from "@/data/course";

import ShapeLeft from "/assets/imgs/shape/shape-left.webp";
import ShapeRight from "/assets/imgs/shape/shape-right.webp";
import ShapeBottom from "/assets/imgs/shape/shape-btm.webp";
import HeroImg from "/assets/imgs/hero/heroImgNew.png";
import coverImg1 from "../../assets/imgs/gallery/coverImg1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { heroAnalytics, heroMarketing, heroUI } from "../../data/hero";
import coverbg from "../../assets/imgs/gallery/coverbg.png";

export default function HeroOne({ currentCourse }) {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    if (currentCourse === "uidesign") {
      setHeroData(heroUI);
    } else if (currentCourse === "marketing") {
      setHeroData(heroMarketing);
    } else if (currentCourse === "analytics") {
      setHeroData(heroAnalytics);
    } else {
      setHeroData(heroUI);
    }
  }, [currentCourse]);

  return (
    <section className="hero__area">
      <img src={coverbg} alt="cover image" className="hero__bg-img" />
      <div className="hero__wrapper">
        <div className="hero__left">
          {heroData.title && (
            <>
              <h1 className="hero__title move-line-3d">
                {heroData.title.sliceOne}
                {/* <span className="course-shape"> {heroData.title.sliceTwo} </span> */}
                {/* <span> {heroData.title.sliceFour}</span> */}
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
                {heroData.title.sliceThree}
              </h1>
            </>
          )}
          {heroData.description && (
            <p className="hero__content fade-slide top" data-slide-amount="20">
              {heroData.description}
            </p>
          )}
        </div>
        <div className="hero__right ">
          <img className="hero__img-new" src={coverImg1} alt="Icon" />
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
            <a href="https://wa.me/7031853012" target="_blank">
              <button className="hero__course-info-button">Apply Now</button>
            </a>
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
