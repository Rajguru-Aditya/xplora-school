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
        "What a great course so far! Very easy to follow, clear, and concise. Great instructor. Just subscribed to your group.",
      name: "Oliva Marry",
      designation: "Student",
    },
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageTwo,
      description:
        "What a great course so far! Very easy to follow, clear, and concise. Great instructor. Just subscribed to your group.",
      name: "Oliva Marry",
      designation: "Student",
    },
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageThree,
      description:
        "What a great course so far! Very easy to follow, clear, and concise. Great instructor. Just subscribed to your group.",
      name: "Oliva Marry",
      designation: "Student",
    },
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageFour,
      description:
        "What a great course so far! Very easy to follow, clear, and concise. Great instructor. Just subscribed to your group.",
      name: "Oliva Marry",
      designation: "Student",
    },
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageThree,
      description:
        "What a great course so far! Very easy to follow, clear, and concise. Great instructor. Just subscribed to your group.",
      name: "Oliva Marry",
      designation: "Student",
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
        "Initially doubtful, but the eating plan from my Skillhub health coach really works I feel better than I have in years",
      name: "David Bergstrom",
      designation: "— Skillhub Member, Austin",
    },
    {
      image: TestimonialThreeImageTow,
      title:
        "David doubtful, but the eating plan from my Skillhub health coach really works I feel better than I have in years",
      name: "Robartho Filson",
      designation: " — Skillhub Member, Austin",
    },
    {
      image: TestimonialThreeImageThree,
      title:
        " David doubtful, but the eating plan from my Skillhub health coach really works I feel better than I have in years",
      name: "Lisandro Casiano",
      designation: "— Skillhub Member, Austin",
    },
  ],
  shapeOne: TestimonialThreeShapeOne,
  shapeTwo: TestimonialThreeShapeTwo,
  shapeThree: TestimonialThreeShapeThree,
  shapeFour: TestimonialThreeShapeFour,
};

export { testimonialOne, testimonialTwo, testimonialThree };
