import ArrowRightWhiteIcon from "/assets/imgs/icon/arrow-right-white.svg";
import ReviewIcon from "/assets/imgs/icon/review.webp";
import FeedbackIcon from "/assets/imgs/icon/feedback.webp";

import SlideOneItemOne from "/assets/imgs/hero/hero-1.png";
import SlideOneItemTwo from "/assets/imgs/hero/hero-2.png";
import SlideOneItemThree from "/assets/imgs/hero/hero-3.png";
import SlideOneItemFour from "/assets/imgs/hero/hero-4.png";
import SlideOneItemFive from "/assets/imgs/hero/hero-5.png";

import SlideOneWidgetOne from "/assets/imgs/shape/hero-shape-1.webp";
import SlideOneWidgetTwo from "/assets/imgs/shape/hero-shape-2.webp";
import SlideOneWidgetThree from "/assets/imgs/shape/hero-shape-3.webp";

const heroOne = {
  title: {
    sliceOne: "India's First Hybrid School with",
    sliceTwo: "Placement Guaranteed",
    sliceThree: "to enhance your professional",
    sliceFour: "Skills",
  },
  description:
    "Discover innovative methods to transform your skills and professional life.",
  btn: {
    title: "Explore our courses",
    link: "/courses",
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

const heroUI = {
  title: {
    sliceOne: "UI/UX Design Course",
    sliceTwo: "Courses",
    sliceThree: "Create Engaging User Experiences.",
    sliceFour: "Skills",
  },
  description:
    "Learn to navigate the fast-paced world of digital marketing with our comprehensive Digital Marketing Mastery course. Designed for beginners and professionals alike, this course covers essential skills such as SEO, SEM, social media marketing, content strategy, email marketing, and data analytics. With hands-on projects and mentorship from industry experts, you'll gain practical experience and build a portfolio that showcases your expertise. Whether you aim to enhance your career or start a new one in digital marketing, this course will equip you with the tools and knowledge to succeed.",
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

const heroMarketing = {
  title: {
    sliceOne: "Digital Marketing Course",
    sliceTwo: "Courses",
    sliceThree: "Unlock Your Potential in the Digital World.",
    sliceFour: "Skills",
  },
  description:
    "Master the art of creating user-centered designs with our UI/UX Design Essentials course. This course provides a thorough understanding of the principles of user interface and user experience design, focusing on usability, accessibility, and aesthetics. You’ll learn how to create intuitive and visually appealing digital products through wireframing, prototyping, and user testing. Guided by experienced designers, you'll work on real-world projects that help you build a strong portfolio. Whether you’re looking to start a career in UI/UX or enhance your design skills, this course will empower you to create compelling user experiences.",
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

const heroAnalytics = {
  title: {
    sliceOne: "Data Analytics Course",
    sliceTwo: "Courses",
    sliceThree: "Transform Data into Actionable Insights.",
    sliceFour: "Skills",
  },
  description:
    "Dive deep into the world of data with our Data Analysis Professional course. This program is perfect for those looking to develop strong analytical skills and learn how to turn raw data into meaningful insights. You'll cover a range of topics including statistical analysis, data visualization, predictive analytics, and data-driven decision-making. Using industry-standard tools and software, you will engage in real-world projects to apply what you’ve learned and solve complex business problems. Prepare to become a data-driven professional ready to impact decision-making processes in any organization.",
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
    sliceOne: "Shaping Futures with World-Class Learning.",
    sliceTwo: "Xplora School:",
  },
  descriptionOne:
    "At Xplora School, we are dedicated to transforming your educational journey into a pathway for real-world success. Whether you're a high school graduate, a working professional, or someone looking to switch careers, our courses in Digital Marketing, Data Analysis, and UI/UX are designed to equip you with the skills you need to excel. With small class sizes, hybrid learning options, and strong industry connections, we’re here to help you achieve your goals.",
  descriptionTwo:
    "We believe in putting our clients at the heart of everything we do. Your success is our success, and we are committed to delivering exceptional service tailored to your unique.",
};
export {
  heroOne,
  innerHeroOne,
  heroTwo,
  heroThree,
  heroFour,
  heroUI,
  heroMarketing,
  heroAnalytics,
};
