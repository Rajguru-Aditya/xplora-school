import ServiceOneImageOne from "/assets/imgs/icon/skill-1.webp";
import ServiceOneImageTwo from "/assets/imgs/icon/skill-2.webp";
import ServiceOneImageThree from "/assets/imgs/icon/skill-3.webp";
import ServiceOneImageFour from "/assets/imgs/icon/skill-4.webp";

const serviceOne = {
  title: {
    sliceOne: "Why learn with",
    sliceTwo: "Xplora?",
  },
  services: [
    {
      icon: ServiceOneImageTwo,
      title: "Interactive Learning",
      description: "Access knowledge curated by industry professionals.",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b1",
    },
    {
      icon: ServiceOneImageOne,
      title: "Expert Guidance",
      description: "Access knowledge curated by industry professionals.",
      animation: { name: "fade-slide top" },
      classNames: "border-b2 mt-md-5",
    },
    {
      icon: ServiceOneImageThree,
      title: "Career Advancement",
      description: "Access knowledge curated by industry professionals.",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b1",
    },
    {
      icon: ServiceOneImageFour,
      title: "Community Support",
      description: "Access knowledge curated by industry professionals.",
      animation: { name: "fade-slide top" },
      classNames: "border-b2 mt-md-5",
    },
  ],
};

// import ServiceImageOne from "/assets/imgs/thumb/service-img-1.webp";
// import ServiceImageTwo from "/assets/imgs/thumb/service-img-2.webp";
// import ServiceImageThree from "/assets/imgs/thumb/service-img-3.webp";

// import ServiceShapeOne from "/assets/imgs/shape/sr-shapefour-1.webp";
// import ServiceShapeTwo from "/assets/imgs/shape/sr-shapefour-2.webp";
// import ServiceShapeThree from "/assets/imgs/shape/sr-shapefour-3.webp";

const serviceTwo = {
  title: {
    sliceOne: "Tools You will Learn",
    sliceTwo: "Xplora?",
  },
  services: [
    {
      icon: ServiceOneImageTwo,
      title: "Figma",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b3",
    },
    {
      icon: ServiceOneImageOne,
      title: "Sketch",
      animation: { name: "fade-slide top" },
      classNames: "border-b3",
    },
    {
      icon: ServiceOneImageThree,
      title: "InVision",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b3",
    },
    {
      icon: ServiceOneImageFour,
      title: "Adobe Illustrator",
      animation: { name: "fade-slide top" },
      classNames: "border-b3",
    },
    {
      icon: ServiceOneImageTwo,
      title: "Figma",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b3",
    },
    {
      icon: ServiceOneImageOne,
      title: "Sketch",
      animation: { name: "fade-slide top" },
      classNames: "border-b3",
    },
    {
      icon: ServiceOneImageThree,
      title: "InVision",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b3",
    },
    {
      icon: ServiceOneImageFour,
      title: "Adobe Illustrator",
      animation: { name: "fade-slide top" },
      classNames: "border-b3",
    },
  ],
};

import EmpowerIcon from "/assets/imgs/icon/empower.webp";
import SkillIcon from "/assets/imgs/icon/skills.webp";
import ProfitIcon from "/assets/imgs/icon/profit.webp";
import ExistingIcon from "/assets/imgs/icon/existing.webp";

const serviceThree = {
  title: "Our Values",
  services: [
    {
      icon: EmpowerIcon,
      title: "Empower to learning",
      description:
        "You can enable someone to write by giving them a pen and paper.",
      animation: {
        name: "fade-slide bottom",
      },
    },
    {
      icon: SkillIcon,
      title: "Skills over Certificates",
      description:
        "You can enable someone to write by giving them a pen and paper.",
      animation: {
        name: "fade-slide top",
      },
    },
    {
      icon: ProfitIcon,
      title: "Impact over profit",
      description:
        "You can enable someone to write by giving them a pen and paper.",
      animation: {
        name: "fade-slide bottom",
      },
    },
    {
      icon: ExistingIcon,
      title: "Existing over exiting",
      description:
        "You can enable someone to write by giving them a pen and paper.",
      animation: {
        name: "fade-slide top",
      },
    },
  ],
};

export { serviceOne, serviceTwo, serviceThree };
