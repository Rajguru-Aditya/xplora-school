import React from "react";
import "./Terms.scss";

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
      <h1 className="terms-and-conditions__title">Terms and Conditions</h1>
      <p className="terms-and-conditions__intro">
        Welcome to Xplora School! Our terms and conditions outline the rules and
        expectations for our courses, ensuring a clear understanding between
        Xplora School and our students. By enrolling in any of our courses, you
        agree to comply with the following terms and conditions:
      </p>

      <section className="terms-and-conditions__section">
        <h2 className="terms-and-conditions__section-title">
          1. Enrollment and Admission
        </h2>
        <h3 className="terms-and-conditions__subsection-title">
          Eligibility Criteria
        </h3>
        <p className="terms-and-conditions__text">
          Enrollment in Xplora School's courses is subject to meeting specific
          eligibility criteria, which may include educational qualifications,
          work experience, or other prerequisites. Admission is granted at the
          sole discretion of Xplora School.
        </p>
        <h3 className="terms-and-conditions__subsection-title">
          Application Process
        </h3>
        <p className="terms-and-conditions__text">
          All applicants must complete the application process, which includes
          submitting required documents, attending an interview, and any other
          assessments deemed necessary by Xplora School.
        </p>
        <h3 className="terms-and-conditions__subsection-title">Acceptance</h3>
        <p className="terms-and-conditions__text">
          Admission offers are extended based on a selective evaluation process.
          Xplora School reserves the right to accept or reject any application
          without providing a reason.
        </p>
      </section>

      <section className="terms-and-conditions__section">
        <h2 className="terms-and-conditions__section-title">
          2. Course Structure and Delivery
        </h2>
        <h3 className="terms-and-conditions__subsection-title">
          Course Content
        </h3>
        <p className="terms-and-conditions__text">
          Xplora School reserves the right to modify course content,
          instructors, schedules, and delivery methods at any time to improve
          the quality of education.
        </p>
        <h3 className="terms-and-conditions__subsection-title">
          Hybrid Learning
        </h3>
        <p className="terms-and-conditions__text">
          As India's first hybrid school, Xplora School offers a blend of online
          and offline learning experiences. Students are expected to participate
          actively in both formats to maximize their learning outcomes.
        </p>
        <h3 className="terms-and-conditions__subsection-title">
          Attendance and Participation
        </h3>
        <p className="terms-and-conditions__text">
          Regular attendance and active participation in all sessions,
          workshops, and assignments are mandatory. Failure to comply may result
          in ineligibility for the Placement Guarantee and other course
          benefits.
        </p>
      </section>

      <section className="terms-and-conditions__section">
        <h2 className="terms-and-conditions__section-title">
          3. Fees and Payment
        </h2>
        <h3 className="terms-and-conditions__subsection-title">Course Fees</h3>
        <p className="terms-and-conditions__text">
          The total course fee is due at the time of enrollment unless an
          installment plan is agreed upon. All fees are inclusive of applicable
          taxes.
        </p>
        <h3 className="terms-and-conditions__subsection-title">
          Installment Payments
        </h3>
        <p className="terms-and-conditions__text">
          If paying in installments, all payments must be completed according to
          the agreed schedule. Late payments may result in suspension of access
          to course materials and sessions.
        </p>
        <h3 className="terms-and-conditions__subsection-title">
          Refund Policy
        </h3>
        <p className="terms-and-conditions__text">
          Our refund policy is detailed separately. No full course fee refunds
          are available once the course has commenced. Partial refunds may be
          provided under specific conditions before the course starts. For the
          complete refund policy, please refer to the{" "}
          <a href="/refund-policy" className="terms-and-conditions__link">
            Refund Policy
          </a>{" "}
          section.
        </p>
      </section>

      <section className="terms-and-conditions__section">
        <h2 className="terms-and-conditions__section-title">
          4. Placement Guarantee
        </h2>
        <h3 className="terms-and-conditions__subsection-title">
          Eligibility for Guarantee
        </h3>
        <p className="terms-and-conditions__text">
          The Placement Guarantee is contingent on meeting all course
          requirements, including maintaining a 75% aggregate score, attending
          all placement activities, and actively applying for job opportunities.
        </p>
        <h3 className="terms-and-conditions__subsection-title">
          Job or Client Placement
        </h3>
        <p className="terms-and-conditions__text">
          Xplora School guarantees a job or client placement within 6 months of
          course completion for eligible students. If this guarantee is not met,
          eligible students may be entitled to a partial refund as detailed in
          our refund policy.
        </p>
      </section>

      <section className="terms-and-conditions__section">
        <h2 className="terms-and-conditions__section-title">
          5. Conduct and Discipline
        </h2>
        <h3 className="terms-and-conditions__subsection-title">
          Code of Conduct
        </h3>
        <p className="terms-and-conditions__text">
          Students are expected to maintain a professional demeanor and adhere
          to Xplora School’s code of conduct. Any form of misconduct,
          plagiarism, or disruptive behavior will not be tolerated and may
          result in expulsion without a refund.
        </p>
        <h3 className="terms-and-conditions__subsection-title">
          Disciplinary Action
        </h3>
        <p className="terms-and-conditions__text">
          Xplora School reserves the right to take disciplinary action against
          students who violate the terms and conditions, including suspension or
          expulsion from the course.
        </p>
      </section>

      <section className="terms-and-conditions__section">
        <h2 className="terms-and-conditions__section-title">
          6. Intellectual Property
        </h2>
        <h3 className="terms-and-conditions__subsection-title">
          Course Materials
        </h3>
        <p className="terms-and-conditions__text">
          All course materials provided by Xplora School, including but not
          limited to videos, presentations, assignments, and handouts, are the
          intellectual property of Xplora School and are intended for personal
          use only. Redistribution or reproduction of these materials is
          strictly prohibited.
        </p>
      </section>

      <section className="terms-and-conditions__section">
        <h2 className="terms-and-conditions__section-title">
          7. Limitation of Liability
        </h2>
        <h3 className="terms-and-conditions__subsection-title">
          Educational Purpose
        </h3>
        <p className="terms-and-conditions__text">
          Xplora School provides education and training services. While we
          strive to offer the highest quality education, we do not guarantee
          specific outcomes or employment as a result of taking our courses.
        </p>
        <h3 className="terms-and-conditions__subsection-title">
          Liability Limit
        </h3>
        <p className="terms-and-conditions__text">
          Xplora School's liability is limited to the amount of the course fee
          paid by the student. We are not responsible for any indirect,
          incidental, or consequential damages.
        </p>
      </section>

      <section className="terms-and-conditions__section">
        <h2 className="terms-and-conditions__section-title">
          8. Changes to Terms and Conditions
        </h2>
        <h3 className="terms-and-conditions__subsection-title">Updates</h3>
        <p className="terms-and-conditions__text">
          Xplora School reserves the right to update these terms and conditions
          at any time. Students will be notified of any significant changes via
          email or the school’s website.
        </p>
        <h3 className="terms-and-conditions__subsection-title">
          Acceptance of Changes
        </h3>
        <p className="terms-and-conditions__text">
          Continued enrollment in any of Xplora School's courses after the
          update of terms and conditions constitutes acceptance of the new
          terms.
        </p>
      </section>

      <section className="terms-and-conditions__section">
        <h2 className="terms-and-conditions__section-title">
          9. Governing Law
        </h2>
        <h3 className="terms-and-conditions__subsection-title">Jurisdiction</h3>
        <p className="terms-and-conditions__text">
          These terms and conditions are governed by and construed in accordance
          with the laws of India. Any disputes arising from these terms shall be
          resolved exclusively in the courts of India.
        </p>
      </section>

      <p className="terms-and-conditions__conclusion">
        By enrolling in Xplora School, you acknowledge that you have read,
        understood, and agree to abide by these terms and conditions. For any
        questions or clarifications, please contact us at{" "}
        <a
          href="mailto:support@xploraschool.com"
          className="terms-and-conditions__link"
        >
          support@xploraschool.com
        </a>
        .
      </p>
    </div>
  );
};

export default TermsAndConditions;
