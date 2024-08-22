import React from "react";
import { Link, useNavigation } from "react-router-dom";

const ContactUsBanner = () => {
  return (
    <section className="contact-us-banner">
      <div className="contact-us-banner__left-column">
        <h2 className="contact-us-banner__title">
          Ready to Take the Next Step?
        </h2>
        <p className="contact-us-banner__subtitle">
          With our Placement Guarantee, you can embark on your learning journey
          with confidence, knowing that we are dedicated to helping you achieve
          your career goals. Enroll now and start working towards a successful
          future!
        </p>
      </div>
      <div className="contact-us-banner__right-column">
        <Link to="/contact" className="contact-us-banner__learn-more-link">
          <button className="contact-us-banner__contact-button">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactUsBanner;
