import placement from "../../data/placement";

const PlacementGuarantee = () => {
  return (
    <section className="placement-guarantee">
      <div className="placement-guarantee__title-container">
        <h2 className="placement-guarantee__title">{placement.title}</h2>
        <p className="placement-guarantee__subtitle">{placement.subtitle}</p>
      </div>
      <div className="placement-guarantee__content">
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
          <div className="placement-guarantee__line">
            {/* {placement.timelineLeft.map((item, index) => (
              <div
                key={index}
                className="placement-guarantee__line-circle"
              ></div>
            ))}
            {placement.timelineLeft.map((item, index) => (
              <div
                key={index}
                className="placement-guarantee__line-circle"
              ></div>
            ))} */}
          </div>
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
      </div>
    </section>
  );
};

export default PlacementGuarantee;
