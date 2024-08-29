import React from "react";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1 className="privacy-policy__title">Privacy Policy</h1>
      <p className="privacy-policy__date">Effective Date: 28th Aug 2024</p>
      <p className="privacy-policy__intro">
        Welcome to Xplora School ("we," "us," "our"). We are committed to
        protecting your privacy and ensuring that your personal information is
        handled in a safe and responsible manner. This Privacy Policy explains
        how we collect, use, and share your information when you visit or make a
        purchase from{" "}
        <a href="http://www.xploraschool.com" className="privacy-policy__link">
          www.xploraschool.com
        </a>{" "}
        (the "Site").
      </p>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">
          1. Information We Collect
        </h2>
        <ul className="privacy-policy__list">
          <li className="privacy-policy__list-item">
            <strong>Personal Information:</strong> When you sign up for our
            courses, create an account, or contact us, we may collect personal
            details such as your name, email address, phone number, and payment
            information.
          </li>
          <li className="privacy-policy__list-item">
            <strong>Usage Information:</strong> We may collect information about
            your interactions with the Site, including your IP address, browser
            type, pages visited, and time spent on the Site.
          </li>
        </ul>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">
          2. How We Use Your Information
        </h2>
        <ul className="privacy-policy__list">
          <li className="privacy-policy__list-item">
            <strong>To Provide and Manage Our Services:</strong> We use your
            information to process your transactions, manage your account, and
            provide customer support.
          </li>
          <li className="privacy-policy__list-item">
            <strong>To Improve Our Offerings:</strong> We analyze the
            information to enhance our courses, customize your experience, and
            improve the Site’s performance.
          </li>
          <li className="privacy-policy__list-item">
            <strong>Marketing Communications:</strong> With your consent, we may
            send you promotional emails and updates about new courses or
            services. You can opt out at any time.
          </li>
        </ul>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">
          3. Sharing Your Information
        </h2>
        <ul className="privacy-policy__list">
          <li className="privacy-policy__list-item">
            <strong>Service Providers:</strong> We may share your information
            with third-party service providers who assist us in running the
            Site, such as payment processors, hosting services, and email
            service providers.
          </li>
          <li className="privacy-policy__list-item">
            <strong>Legal Requirements:</strong> We may disclose your
            information if required by law, such as in response to a court order
            or subpoena.
          </li>
          <li className="privacy-policy__list-item">
            <strong>Business Transfers:</strong> If we undergo a merger,
            acquisition, or sale of assets, your information may be transferred
            as part of the transaction.
          </li>
        </ul>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">4. Data Security</h2>
        <p className="privacy-policy__text">
          We implement industry-standard security measures to protect your
          information. However, no method of transmission over the Internet is
          100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">5. Your Rights</h2>
        <ul className="privacy-policy__list">
          <li className="privacy-policy__list-item">
            <strong>Access and Correction:</strong> You can request access to
            your information and request corrections if it is inaccurate.
          </li>
          <li className="privacy-policy__list-item">
            <strong>Deletion:</strong> You can request that we delete your
            personal information, subject to certain exceptions.
          </li>
          <li className="privacy-policy__list-item">
            <strong>Opt-Out:</strong> You can opt out of receiving marketing
            communications from us at any time.
          </li>
        </ul>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">6. Third-Party Links</h2>
        <p className="privacy-policy__text">
          Our Site may contain links to other websites. We are not responsible
          for the privacy practices or the content of those sites.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">7. Children's Privacy</h2>
        <p className="privacy-policy__text">
          Our Site is not intended for children under 13 years of age. We do not
          knowingly collect personal information from children under 13.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">
          8. Changes to This Privacy Policy
        </h2>
        <p className="privacy-policy__text">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page and updating
          the effective date above.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">9. Contact Us</h2>
        <p className="privacy-policy__text">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
          <br />
          Email:{" "}
          <a
            href="mailto:help@xploraschool.com"
            className="privacy-policy__link"
          >
            help@xploraschool.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
