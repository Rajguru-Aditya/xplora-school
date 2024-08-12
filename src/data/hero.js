import ArrowRightWhiteIcon from "/assets/imgs/icon/arrow-right-white.svg";
import ReviewIcon from "/assets/imgs/icon/review.webp";
import FeedbackIcon from "/assets/imgs/icon/feedback.webp";

import SlideOneItemOne from "/assets/imgs/hero/hero-1.webp";
import SlideOneItemTwo from "/assets/imgs/hero/hero-2.webp";
import SlideOneItemThree from "/assets/imgs/hero/hero-3.webp";
import SlideOneItemFour from "/assets/imgs/hero/hero-4.webp";
import SlideOneItemFive from "/assets/imgs/hero/hero-5.webp";

import SlideOneWidgetOne from "/assets/imgs/shape/hero-shape-1.webp";
import SlideOneWidgetTwo from "/assets/imgs/shape/hero-shape-2.webp";
import SlideOneWidgetThree from "/assets/imgs/shape/hero-shape-3.webp";

const heroOne = {
  title: {
    sliceOne: "Explore tailored",
    sliceTwo: "Courses",
    sliceThree: "to enhance your professional",
    sliceFour: "Skills",
  },
  description:
    "Discover innovative methods to transform your skills and professional life.",
  btn: {
    title: "Explore our courses",
    link: "course",
    icon: ArrowRightWhiteIcon,
  },
  review: {
    icon: ReviewIcon,
    feedbackIcon: FeedbackIcon,
    title: "Based on 1,000+ reviews from",
  },
  slides: [
    {
      items: [
        {
          image: SlideOneItemOne,
        },
        {
          image: SlideOneItemTwo,
          widget: {
            image: SlideOneWidgetOne,
            classNames: "hero__shape-1 fade-slide bottom",
          },
        },
        {
          image: SlideOneItemThree,
          widget: {
            image: SlideOneWidgetThree,
            classNames: "hero__shape-2 fade-slide right",
          },
        },
        {
          image: SlideOneItemFour,
          widget: {
            image: SlideOneWidgetTwo,
            classNames: "hero__shape-3 fade-slide left",
          },
        },
        {
          image: SlideOneItemFive,
        },
      ],
    },
    {
      items: [
        {
          image: SlideOneItemOne,
        },
        {
          image: SlideOneItemTwo,
          widget: {
            image: SlideOneWidgetOne,
            classNames: "hero__shape-1 fade-slide bottom",
          },
        },
        {
          image: SlideOneItemThree,
          widget: {
            image: SlideOneWidgetThree,
            classNames: "hero__shape-2 fade-slide right",
          },
        },
        {
          image: SlideOneItemFour,
          widget: {
            image: SlideOneWidgetTwo,
            classNames: "hero__shape-3 fade-slide left",
          },
        },
        {
          image: SlideOneItemFive,
        },
      ],
    },
  ],
};

import InnerOneShapeOne from "/assets/imgs/shape/banner-shape-1.webp";
import InnerOneShapeTwo from "/assets/imgs/shape/banner-shape-2.webp";
import InnerOneShapeThree from "/assets/imgs/shape/banner-shape-3.webp";
import InnerOneShapeFour from "/assets/imgs/shape/banner-shape-4.webp";
import InnerOneShapeFive from "/assets/imgs/shape/banner-shape-5.webp";
import InnerOneShapeSix from "/assets/imgs/shape/banner-shape-6.webp";
import InnerOneShapeSeven from "/assets/imgs/shape/banner-shape-7.webp";

const innerHeroOne = {
  shapeOne: InnerOneShapeOne,
  shapeTwo: InnerOneShapeTwo,
  shapeThree: InnerOneShapeThree,
  shapeFour: InnerOneShapeFour,
  shapeFive: InnerOneShapeFive,
  shapeSix: InnerOneShapeSix,
  shapeSeven: InnerOneShapeSeven,
};

import BadgeImage from "/assets/imgs/shape/hero-circletext-4.svg";
import BadgeTextIcon from "/assets/imgs/icon/textshape-icon.svg";
import HeroTwoImageOne from "/assets/imgs/hero/children-women.webp";
import HeroTwoImageTwo from "/assets/imgs/hero/child-img.webp";

import HeroTwoShapeOne from "/assets/imgs/shape/hero-btm-shape-4.webp";
import HeroTwoShapeTwo from "/assets/imgs/shape/hero-shapefour-1.webp";
import HeroTwoShapeThree from "/assets/imgs/shape/hero-shapefour-4.webp";
import HeroTwoShapeFour from "/assets/imgs/shape/hero-shapefour-5.webp";
import HeroTwoShapeFive from "/assets/imgs/shape/hero-shapefour-8.webp";
import HeroTwoShapeSix from "/assets/imgs/shape/hero-shapefour-9.webp";
import HeroTwoShapeSeven from "/assets/imgs/shape/hero-shapefour-11.webp";
import HeroTwoShapeEight from "/assets/imgs/bg/1.webp";

const heroTwo = {
  title: {
    sliceOne: "UI/UX Design Course",
    sliceTwo: "Courses",
    sliceThree: "Design Engaging User Experiences",
    sliceFour: "Skills",
  },
  description:
    "A well-designed user experience can make or break a product. Our UI/UX Design course will equip you with the skills to create intuitive and engaging digital interfaces that users love.",
  link: "courses",
  imageOne: HeroTwoImageOne,
  imageTwo: HeroTwoImageTwo,
  badgeImage: BadgeImage,
  badgeTextIcon: BadgeTextIcon,
  shapeOne: HeroTwoShapeOne,
  shapeTwo: HeroTwoShapeTwo,
  shapeThree: HeroTwoShapeThree,
  shapeFour: HeroTwoShapeFour,
  shapeFive: HeroTwoShapeFive,
  shapeSix: HeroTwoShapeSix,
  shapeSeven: HeroTwoShapeSeven,
  shapeEight: HeroTwoShapeEight,
};

import HeroThreeShapeOne from "/assets/imgs/shape/banner-6-1.webp";
import HeroThreeShapeTwo from "/assets/imgs/shape/banner-6-2.webp";
import HeroThreeShapeThree from "/assets/imgs/shape/banner-6-3.webp";
import HeroThreeShapeFour from "/assets/imgs/shape/banner-6-4.webp";

const heroThree = {
  title: {
    sliceOne: "Let a health coach guide you a better",
    sliceTwo: "Health",
  },
  description:
    "At Tomorrow Health, we build technology that improves the way home-based care.",
  btn: {
    link: "contact",
    text: "Get Started",
  },
  shapeOne: HeroThreeShapeOne,
  shapeTwo: HeroThreeShapeTwo,
  shapeThree: HeroThreeShapeThree,
  shapeFour: HeroThreeShapeFour,
};

const heroFour = {
  title: {
    sliceOne: "Global leader in learning and instruction",
    sliceTwo: "Marketplace",
  },
  descriptionOne:
    "Inspiring courses for the life you want to lead. Discover our fresh approach to a life-changing educational adventure.",
  descriptionTwo:
    "We believe in putting our clients at the heart of everything we do. Your success is our success, and we are committed to delivering exceptional service tailored to your unique.",
};
export { heroOne, innerHeroOne, heroTwo, heroThree, heroFour };
