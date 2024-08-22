import { courseTwo as data } from "@/data/course";
import imagesLoaded from "imagesloaded";
import { useEffect, useRef } from "react";
import CourseCardTwo from "@/components/Card/Course/CourseCardTwo";
import Isotope from "isotope-layout";

export default function CourseOne() {
  const isotope = useRef();

  useEffect(() => {
    isotope.current = new Isotope(".course__wrapper", {
      itemSelector: ".course_item_wrapper",
      percentPosition: true,
      masonry: {
        columnWidth: 0,
      },
      transitionDuration: "0.5s",
    });

    // Initialize imagesLoaded
    imagesLoaded(".course__wrapper").on("progress", () => {
      isotope.current.layout();
    });
  }, []);

  return (
    <section className="course__area pt-110 pb-130">
      <div className="container">
        <div className="course__top-wrap">
          {data.title && (
            <h2 className="section-title move-line-3d">
              {data.title.sliceOne}
            </h2>
          )}

          <p className="section-subtitle move-line-3d">{data.subtitle}</p>
        </div>
        <div className="row course__wrapper fade-slide bottom">
          {data.courses.map((course, index) => (
            <div
              key={index}
              className={`col-xl-4 col-lg-4 col-md-6 course_item_wrapper ${course.filterClass}`}
            >
              <CourseCardTwo link={course?.link} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
