import { useState } from "react";
import certificates from "../../data/certificates";

const Certificates = () => {
  const [activeImage, setActiveImage] = useState("");

  return (
    <section className="certificates">
      <div className="certificates__left-column">
        <h2 className="certificates__title">{certificates.title}</h2>
        <h3 className="certificates__subtitle">{certificates.subtitle}</h3>
        <div className="certificates__buttons">
          {certificates.buttons.map((button, index) => (
            <button
              key={index}
              className="certificates__button"
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
