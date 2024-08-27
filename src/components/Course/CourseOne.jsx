import { courseOne as data } from "@/data/course";
import { useState } from "react";
import CourseCardOne from "@/components/Card/Course/CourseCardOne";

export default function CourseOne() {
  const [filterType, setFilterType] = useState("*");

  const handleFilterTypeChange = (key) => () => setFilterType(key);

  const filteredCourses =
    filterType === "*"
      ? data.courses
      : data.courses.filter((course) =>
          course.filterClass.includes(filterType)
        );

  return (
    <section className="course__area pt-110 pb-130">
      <div className="container">
        <div className="course__top-wrap">
          {data.title && (
            <h2 className="section-title move-line-3d">
              {data.title.sliceOne} <span>{data.title.sliceTwo}</span>
            </h2>
          )}
          {/* Tab buttons */}
          {data.filterOptions && data.filterOptions.length > 0 && (
            <div className="course__tab-wrap fade-slide right">
              {data.filterOptions.map((option, index) => (
                <button
                  key={index}
                  className={`course__btn ${
                    filterType === option.target ? "active" : ""
                  }`}
                  onClick={handleFilterTypeChange(option.target)}
                >
                  {option.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="course__wrapper-0">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className={`course_item_wrapper-0 ${course.filterClass}`}
            >
              <CourseCardOne course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
