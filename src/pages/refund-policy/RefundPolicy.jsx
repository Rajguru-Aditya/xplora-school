import React from "react";
import "./RefundPolicy.scss";

const RefundPolicy = () => {
  return (
    <div className="refund-policy">
      <h1 className="refund-policy__title">Refund Policy</h1>
      <p className="refund-policy__intro">
        At Xplora School, we are committed to providing an exceptional learning
        experience. However, we understand that sometimes, circumstances change,
        and you may need to reconsider your enrollment. Our refund policy is
        structured to ensure clarity and fairness.
      </p>

      <section className="refund-policy__section">
        <h2 className="refund-policy__section-title">
          1. Partial Refund Policy
        </h2>
        <h3 className="refund-policy__subsection-title">
          Before Course Commencement
        </h3>
        <p className="refund-policy__text">
          If you decide to withdraw from the course before it begins, you are
          eligible for a partial refund of the course fee. Please note that this
          refund will only be processed if the request is made before the start
          date of the course.{" "}
          <span
            style={{
              display: "block",
              marginTop: "1rem",
              fontStyle: "italic",
            }}
          >
            The refund will be processed within 15 days after the support
            request is raised.
          </span>
        </p>
        <h3 className="refund-policy__subsection-title">
          After Course Commencement
        </h3>
        <p className="refund-policy__text">
          Once the course has commenced, refunds are not available. We encourage
          students to carefully consider their commitment before the course
          begins.
        </p>
      </section>

      <section className="refund-policy__section">
        <h2 className="refund-policy__section-title">
          2. Job or Client Placement Guarantee Refund
        </h2>
        <h3 className="refund-policy__subsection-title">
          Eligibility for Placement Refund
        </h3>
        <ul className="refund-policy__list">
          <li className="refund-policy__list-item">
            Meet the 75% aggregate marks requirement for the Placement Guarantee
            Course.
          </li>
          <li className="refund-policy__list-item">
            Participate in all placement-related activities, preparation
            sessions, and drives organized by Xplora School.
          </li>
          <li className="refund-policy__list-item">
            Make sincere efforts by applying to at least 30 relevant job or
            client opportunities per week and attending all interviews and
            selection processes arranged by Xplora School.
          </li>
          <li className="refund-policy__list-item">
            Maintain good conduct throughout the course, recruitment process,
            and any internship period.
          </li>
        </ul>
        <h3 className="refund-policy__subsection-title">Refund Process</h3>
        <p className="refund-policy__text">
          If you meet all the eligibility criteria and do not secure a job or
          internship with a pre-placement offer (PPO) within 6 months of course
          completion, you may be eligible for a refund of the course fee paid.
          To initiate this process, contact Xplora School’s support team at{" "}
          <a
            href="mailto:support@xploraschool.com"
            className="refund-policy__link"
          >
            support@xploraschool.com
          </a>
          . Our team will guide you on the necessary documents and steps to
          process your refund.
        </p>
        <h3 className="refund-policy__subsection-title">Claim Submission</h3>
        <p className="refund-policy__text">
          Refund claims must be submitted within 30 days after the job guarantee
          period ends. Claims submitted after this period will not be
          considered.
        </p>
      </section>

      <section className="refund-policy__section">
        <h2 className="refund-policy__section-title">3. Important Notes</h2>
        <ul className="refund-policy__list">
          <li className="refund-policy__list-item">
            <strong>No Full Course Fee Refund:</strong> Full course fee refunds
            are not applicable under any circumstances once the course has
            started.
          </li>
          <li className="refund-policy__list-item">
            <strong>Administrative Fees:</strong> All refunds are subject to a
            processing fee, which will be deducted from the refundable amount.
          </li>
          <li className="refund-policy__list-item">
            <strong>Compliance:</strong> Students who fail to comply with the
            course requirements, including attendance, assignment submissions,
            and conduct policies, will not be eligible for a refund under the
            job or client placement guarantee.
          </li>
        </ul>
        <p className="refund-policy__text">
          For any further questions or assistance, please reach out to our
          support team at{" "}
          <a
            href="mailto:support@xploraschool.com"
            className="refund-policy__link"
          >
            support@xploraschool.com
          </a>
          . We are here to support you and ensure your experience with Xplora
          School is both fulfilling and transparent.
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
