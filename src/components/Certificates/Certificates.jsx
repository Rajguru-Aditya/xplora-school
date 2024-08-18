import { useEffect, useState } from "react";
import certificates from "../../data/certificates";

const Certificates = () => {
  const [activeImage, setActiveImage] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setActiveImage(certificates.buttons[0].link);
  }, []);

  useEffect(() => {
    setClicked(activeImage);
  }, [activeImage]);

  return (
    <section className="certificates">
      <div className="certificates__left-column">
        <h2 className="certificates__title">{certificates.title}</h2>
        <h3 className="certificates__subtitle">{certificates.subtitle}</h3>
        <div className="certificates__buttons">
          {certificates.buttons.map((button, index) => (
            <button
              key={index}
              className={`certificates__button ${
                clicked === button.link ? "certificates__btn-clicked " : ""
              }`}
              onClick={() => setActiveImage(button.link)}
            >
              {button.title}
            </button>
          ))}
        </div>
      </div>
      <div className="certificates__right-column">
        <img
          className="certificates__image"
          src={activeImage || certificates.buttons[0].link}
          alt="Certificate"
        />
      </div>
    </section>
  );
};

export default Certificates;
