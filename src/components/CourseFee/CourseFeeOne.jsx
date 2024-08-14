import React from "react";
import { courseFee } from "../../data/course";

const CourseFeeOne = () => {
  return (
    <div className="course-fee-one">
      <div>
        <h2 className="course-fee-one__title">{courseFee.title}</h2>
      </div>
      {/* Cards */}
      <div className="course-fee-one__card-container">
        {courseFee.cards?.map((item, index) => (
          <div
            key={index}
            className={`course-fee-one__card ${
              item.type === "Online" ? "online" : "hybrid"
            }`}
          >
            <h3 className="course-fee-one__card-title">{item.title}</h3>
            <p className="course-fee-one__card-description">
              {item.description}
            </p>
            <p className="course-fee-one__card-amount">{item.amount}</p>
            <div className="course-fee-one__features-container">
              {item.features?.map((feature, index) => (
                <div
                  key={index}
                  className={`course-fee-one__card-feature-container`}
                >
                  <img
                    src={`https://img.icons8.com/ios-glyphs/30/${
                      item.title === "Online" ? "000000" : "ffffff"
                    }/checkmark--v1.png`}
                    alt="checkmark"
                    className="course-fee-one__checkmark"
                  />
                  <p key={index} className={`course-fee-one__card-feature`}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="course-fee-one__card-button"
              onClick={() => alert("You clicked me!")}
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFeeOne;
