import { useState } from "react";
import placement from "../../data/placement";
import { useEffect } from "react";

const PlacementGuarantee = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="placement-guarantee">
      <div className="placement-guarantee__title-container">
        <h2 className="placement-guarantee__title">{placement.title}</h2>
        <p className="placement-guarantee__subtitle">{placement.subtitle}</p>
      </div>
      <div className="placement-guarantee__content">
        {screenWidth < 900 ? (
          <div className="placement-guarantee__mobile">
            {placement.timelineLeft.map((item, index) => (
              <div
                className={`placement-guarantee__item ${item.class}`}
                key={index}
              >
                <div className="placement-guarantee__step">{item.step}</div>
                <div className="placement-guarantee__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
            <div className="placement-guarantee__line"></div>
            {placement.timelineRight.map((item, index) => (
              <div
                className={`placement-guarantee__item ${item.class}`}
                key={index}
              >
                <div className="placement-guarantee__step">{item.step}</div>
                <div className="placement-guarantee__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="placement-guarantee__wrapper">
            <div className="placement-guarantee__wrapper-left">
              {placement.timelineLeft.map((item, index) => (
                <div
                  className={`placement-guarantee__item ${item.class}`}
                  key={index}
                >
                  <div className="placement-guarantee__step">{item.step}</div>
                  <div className="placement-guarantee__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="placement-guarantee__line"></div>
            <div className="placement-guarantee__wrapper-right">
              {placement.timelineRight.map((item, index) => (
                <div
                  className={`placement-guarantee__item ${item.class}`}
                  key={index}
                >
                  <div className="placement-guarantee__step">{item.step}</div>
                  <div className="placement-guarantee__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlacementGuarantee;
