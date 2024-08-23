import InstructorOneImageOne from "/assets/imgs/team/team-1.webp";
import InstructorOneImageTwo from "/assets/imgs/team/team-2.webp";
import InstructorOneImageThree from "/assets/imgs/team/team-3.webp";

const AdmissionOne = {
  title: {
    sliceOne: "Admission Process",
    sliceTwo: "Xplora School?",
  },
  description: {
    sliceOne: "At",
    sliceTwo: "Xplora School",
    sliceThree:
      ", we carefully select candidates who show the potential to excel in our programs. Our intake process is by interview only and involves three simple steps:",
  },
  endDescription:
    "Ready to take the next step? Apply now and start your journey with Xplora School",
  process: [
    {
      image: InstructorOneImageOne,
      title: "Schedule a Call",
      desc: "Begin by scheduling a call with one of our knowledgeable counselors to discuss your goals and learn more about our courses.",
      animation: {
        classes: "fade-slide bottom",
        delay: "0.4",
        duration: "1.5",
      },
    },
    {
      image: InstructorOneImageTwo,
      title: "Video Interview",
      desc: "Next, attend a video interview to demonstrate your skills, passion, and readiness to join our community.",
      animation: {
        classes: "fade-slide bottom",
        delay: "0.6",
        duration: "1.5",
      },
    },
    {
      image: InstructorOneImageThree,
      title: "Acceptance Letter",
      desc: "If selected, you'll receive an acceptance letter by mail. Please note that our acceptance rate is 10%, reflecting our high standards and commitment to excellence.",
      animation: {
        classes: "fade-slide bottom",
        delay: "0.8",
        duration: "1.5",
      },
    },
  ],
};

export { AdmissionOne };
