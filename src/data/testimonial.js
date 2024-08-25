import quoteTopIcon from "/assets/imgs/icon/qoute-top.webp";
import quoteBottomIcon from "/assets/imgs/icon/quote-btm.webp";
import TestimonialOneImageOne from "/assets/imgs/team/testimonial-2.webp";
import TestimonialOneImageTwo from "/assets/imgs/team/comment-1.webp";
import TestimonialOneImageThree from "/assets/imgs/team/comment-2.webp";
import TestimonialOneImageFour from "/assets/imgs/team/comment-3.webp";
import LeftIcon from "/assets/imgs/icon/ts-icon-left.webp";
import RightIcon from "/assets/imgs/icon/ts-icon-right.webp";

const testimonialOne = {
  title: "Feedback from Our",
  highlightedTitle: "Student",
  navigation: {
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
  },
  testimonials: [
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageOne,
      description:
        "Xplora School's Marketing course was a game-changer for me. I learned how to create effective campaigns and measure their success. The instructors were knowledgeable and supportive. I'd highly recommend this course to anyone looking to boost their marketing skills!",
      name: "Rahul Sharma",
      designation: "Marketing Executive",
    },
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageTwo,
      description:
        "I was impressed by the depth and breadth of Xplora School's Data Analyst course. The instructors covered everything from data visualization to machine learning, and provided hands-on experience with industry-standard tools. I appreciated the emphasis on practical skills and real-world applications.",
      name: "Saurabh Jain",
      designation: "Data Analyst",
    },
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageThree,
      description:
        "I loved Xplora School's UI/UX course! The instructors were passionate and knowledgeable, and the course material was engaging and inspiring. I appreciated the emphasis on creativity and user-centered design, and the opportunity to work on real-world projects.",
      name: "Priya Patel",
      designation: "UI/UX Designer",
    },
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageFour,
      description:
        "I thought I knew marketing, but Xplora School's course showed me how much I didn't know. It was like drinking from a firehose, but in a good way! The instructors were engaging, the material was relevant, and the assignments were challenging but fun. I'd recommend this course to anyone who wants to level up their marketing skills and have a good time doing it.",
      name: "Karan Singh",
      designation: "Student",
    },
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageThree,
      description:
        "Xplora School's UI/UX course was a transformative experience for me. I learned how to approach design from a user-centered perspective, and how to create intuitive and engaging interfaces. The instructors were supportive and knowledgeable, and the course material was challenging and inspiring. I feel confident and prepared to take on any design challenge that comes my way!",
      name: "Aisha Khan",
      designation: "UI/UX Designer",
    },
  ],
};

import TestimonialTwoShapeOne from "/assets/imgs/icon/star-red-lg.webp";
import TestimonialTwoShapeTwo from "/assets/imgs/shape/ts-border-shape.webp";
import TestimonialTwoClientOne from "/assets/imgs/team/ts-client-4.webp";
import TestimonialTwoClientTwo from "/assets/imgs/team/comment-1.webp";
import TestimonialTwoClientThree from "/assets/imgs/team/comment-2.webp";

const testimonialTwo = [
  {
    image: TestimonialTwoClientOne,
    shapeOne: TestimonialTwoShapeOne,
    shapeTwo: TestimonialTwoShapeTwo,
    name: "Janathon Mike",
    designation: "Parent",
    description:
      "I'm thoroughly enjoying the course! It's incredibly well-structured, easy to follow, and the instructor's clarity is outstanding.",
  },
  {
    image: TestimonialTwoClientTwo,
    shapeOne: TestimonialTwoShapeOne,
    shapeTwo: TestimonialTwoShapeTwo,
    name: "Stuart Law",
    designation: "Student",
    description:
      "I'm thoroughly enjoying the course! It's incredibly well-structured, easy to follow, and the instructor's clarity is outstanding.",
  },
  {
    image: TestimonialTwoClientThree,
    shapeOne: TestimonialTwoShapeOne,
    shapeTwo: TestimonialTwoShapeTwo,
    name: "John Abraham",
    designation: "Instructor",
    description:
      "I'm thoroughly enjoying the course! It's incredibly well-structured, easy to follow, and the instructor's clarity is outstanding.",
  },
];

import TestimonialThreeImageOne from "/assets/imgs/thumb/testimonial-6-1.webp";
import TestimonialThreeImageTow from "/assets/imgs/thumb/blog-6-1.webp";
import TestimonialThreeImageThree from "/assets/imgs/thumb/testimonial-6-1.webp";

import TestimonialThreeShapeOne from "/assets/imgs/shape/testi-6-1.webp";
import TestimonialThreeShapeTwo from "/assets/imgs/shape/testi-6-2.webp";
import TestimonialThreeShapeThree from "/assets/imgs/shape/testi-6-3.webp";
import TestimonialThreeShapeFour from "/assets/imgs/shape/testi-6-4.webp";

const testimonialThree = {
  title: "What people say about us",
  testimonials: [
    {
      image: TestimonialThreeImageOne,
      title:
        "Initially doubtful, but the eating plan from my Xplora health coach really works I feel better than I have in years",
      name: "David Bergstrom",
      designation: "— Xplora Member, Austin",
    },
    {
      image: TestimonialThreeImageTow,
      title:
        "David doubtful, but the eating plan from my Xplora health coach really works I feel better than I have in years",
      name: "Robartho Filson",
      designation: " — Xplora Member, Austin",
    },
    {
      image: TestimonialThreeImageThree,
      title:
        " David doubtful, but the eating plan from my Xplora health coach really works I feel better than I have in years",
      name: "Lisandro Casiano",
      designation: "— Xplora Member, Austin",
    },
  ],
  shapeOne: TestimonialThreeShapeOne,
  shapeTwo: TestimonialThreeShapeTwo,
  shapeThree: TestimonialThreeShapeThree,
  shapeFour: TestimonialThreeShapeFour,
};

export { testimonialOne, testimonialTwo, testimonialThree };
