import GraduateShape from "/assets/imgs/shape/graduate-shape.webp";
import UserShape from "/assets/imgs/shape/user-shape.webp";
import MessageShape from "/assets/imgs/shape/message-shape.webp";

const aboutOne = {
  title: {
    sliceOne: "Accessing your",
    sliceTwo: "course",
    sliceThree: "anywhere to learn new skill for grow your",
    sliceFour: "Career",
  },
  description:
    "In recent years, the popularity of online learning has surged, providing individuals with a flexible and convenient avenue to pursue education.",
  video: {
    src: "assets/media/videos/features-video.mp4",
  },
  widgets: [
    {
      shape: GraduateShape,
      classNames: "features__shape2 fade-slide right",
    },
    {
      shape: UserShape,
      classNames: "features__shape3 fade-slide left",
    },
    {
      shape: MessageShape,
      classNames: "features__shape4 fade-slide bottom",
    },
  ],
};

import AboutTwoImage from "/assets/imgs/thumb/ab-img.webp";
import AboutTwoFeatureIconOne from "/assets/imgs/icon/about-icon-1.webp";
import AboutTwoFeatureIconTwo from "/assets/imgs/icon/about-icon-2.webp";
import AboutTwoFeatureIconThree from "/assets/imgs/icon/about-icon-3.webp";
import AboutTwoFeatureIconFour from "/assets/imgs/icon/about-icon-4.webp";

import ShapeThreeOne from "/assets/imgs/shape/ts-shapethree1.webp";
import ShapeFourTwo from "/assets/imgs/shape/ab-shapefour-2.webp";
import ShapeFourThree from "/assets/imgs/shape/ab-shapefour-3.webp";
import ShapeFourFour from "/assets/imgs/shape/ab-shapefour-4.webp";
import ShapeFourFive from "/assets/imgs/shape/ab-shapefour-5.webp";
import ShapeFourSix from "/assets/imgs/shape/ab-shapefour-6.webp";
import ShapeFourSeven from "/assets/imgs/shape/ab-shapefour-7.webp";
import ShapeFourEight from "/assets/imgs/shape/ab-shapefour-8.webp";

const aboutTwo = {
  image: AboutTwoImage,
  title: "Every child deserves to learn",
  description:
    "Million children lack basic math and reading skills globally. Help us provide the education they need.",
  features: [
    {
      icon: AboutTwoFeatureIconOne,
      name: "Customized Learning",
      animation: {
        name: "fade-slide bottom",
        delay: "0.4",
      },
    },
    {
      icon: AboutTwoFeatureIconTwo,
      name: "Professional Content",
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
    },
    {
      icon: AboutTwoFeatureIconThree,
      name: "Parental Involvement",
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
    },
    {
      icon: AboutTwoFeatureIconFour,
      name: "Source & safe Kids",
      animation: {
        name: "fade-slide bottom",
        delay: "1.0",
      },
    },
  ],
  btn: {
    text: "Get Started",
    link: "contact",
  },
  shapeOne: ShapeThreeOne,
  shapeTwo: ShapeFourTwo,
  shapeThree: ShapeFourThree,
  shapeFour: ShapeFourFour,
  shapeFive: ShapeFourFive,
  shapeSix: ShapeFourSix,
  shapeSeven: ShapeFourSeven,
  shapeEight: ShapeFourEight,
};

import AboutThreeImageOne from "/assets/imgs/thumb/about-6-1.webp";
import AboutThreeShapeOne from "/assets/imgs/shape/about-6-1.webp";
import AboutThreeShapeTwo from "/assets/imgs/shape/about-6-2.webp";
import AboutThreeShapeThree from "/assets/imgs/shape/about-6-3.webp";
import AboutThreeShapeFour from "/assets/imgs/shape/about-6-4.webp";
import AboutThreeShapeFive from "/assets/imgs/shape/about-6-5.webp";

const aboutThree = {
  title: "Build A wealth of energy, happiness and strength",
  subTitle: "About Us",
  descriptionOne:
    "Health coaching is the perfect solution for identifying your challenges and addressing them with a sense of self accountability Our 60-minute, three-sessions-per-month individual and specialty coaching packages.",
  descriptionTwo:
    "Help you refocus, revise, and realign your actions with your goals. We know you’re busy doing incredible work.",
  link: "about",
  image: AboutThreeImageOne,
  shapeOne: AboutThreeShapeOne,
  shapeTwo: AboutThreeShapeTwo,
  shapeThree: AboutThreeShapeThree,
  shapeFour: AboutThreeShapeFour,
  shapeFive: AboutThreeShapeFive,
};

import ArrowRightWhite from "/assets/imgs/icon/arrow-right-white.svg";
import AboutFourThumb from "/assets/imgs/thumb/aboutfour-thumb.webp";
import AboutShapeFourOne from "/assets/imgs/shape/about-shapefour-1.webp";
import ReviewShape from "/assets/imgs/shape/review-shape.webp";

const aboutFour = {
  image: AboutFourThumb,
  shapeOne: AboutShapeFourOne,
  shapeTwo: ReviewShape,
  title: {
    sliceOne: "We Offering top-quality online",
    sliceTwo: "Courses",
  },
  description:
    "Ariel Renous and Roy Wellner, two lifelong friends with a passion for business, started their educational journey in a renowned European business school. They quickly realized there was a disconnect: many of their instructors were academics that lacked real-world experience",
  btn: {
    text: "Browse More",
    link: "courses",
    icon: ArrowRightWhite,
  },
};

export { aboutOne, aboutTwo, aboutThree, aboutFour };
