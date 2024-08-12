import CourseImageOne from "/assets/imgs/gallery/course-img-1.webp";
import CourseImageTwo from "/assets/imgs/gallery/course-img-2.webp";
import CourseImageThree from "/assets/imgs/gallery/course-img-3.webp";
import CourseImageFour from "/assets/imgs/gallery/course-img-4.webp";
import CourseImageFive from "/assets/imgs/gallery/course-img-5.webp";
import CourseImageSix from "/assets/imgs/gallery/course-img-6.webp";

import InstructorImageOne from "/assets/imgs/team/comment-1.webp";
import InstructorImageTwo from "/assets/imgs/team/comment-2.webp";
import InstructorImageThree from "/assets/imgs/team/comment-3.webp";
import InstructorImageFour from "/assets/imgs/team/comment-img.webp";
import InstructorImageFive from "/assets/imgs/team/instructor.webp";

import WishListIcon from "/assets/imgs/icon/wiselist.svg";
import StarRedIcon from "/assets/imgs/icon/star-red.svg";
import StatusIcon from "/assets/imgs/icon/status-icon.svg";
import UserGroupIcon from "/assets/imgs/icon/user-three-red.svg";
import RightArrowRedIcon from "/assets/imgs/icon/arrow-right-red.svg";
import RightArrowWhiteIcon from "/assets/imgs/icon/arrow-right-white.svg";

const courseOne = {
  title: {
    sliceOne: "Explore popular",
    sliceTwo: "Course",
  },
  filterOptions: [
    {
      name: "All",
      target: "*",
    },
    {
      name: "Trending",
      target: "trending",
    },
    {
      name: "Popular",
      target: "popular",
    },
    {
      name: "Featured",
      target: "featured",
    },
  ],
  courses: [
    {
      image: CourseImageOne,
      instructor: {
        image: InstructorImageFive,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "Web Development For Beginners How To Use HTML5",
      price: "$19.00",
      link: "course-detail",
      filterClass: "trending",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageTwo,
      instructor: {
        image: InstructorImageOne,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "Crafting User-Friendly Interfaces Design",
      price: "$9.00",
      link: "course-detail",
      filterClass: "trending",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageFour,
      instructor: {
        image: InstructorImageTwo,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "Responsive Web Design: Creating Sites for Any Device",
      price: "$15.00",
      link: "course-detail",
      filterClass: "popular",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageThree,
      instructor: {
        image: InstructorImageThree,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "HTML & CSS Fundamentals: Building the Web from Scratch",
      price: "$13.00",
      link: "course-detail",
      filterClass: "popular",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageFour,
      instructor: {
        image: InstructorImageFour,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "UI/UX Design Principles: Enhancing User Experience",
      price: "$11.00",
      link: "course-detail",
      filterClass: "featured",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageSix,
      instructor: {
        image: InstructorImageFive,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "Web Design Trends: Staying Current in a Dynamic Field",
      price: "$17.00",
      link: "course-detail",
      filterClass: "featured",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
  ],
  more: {
    name: "Browse More",
    icon: RightArrowWhiteIcon,
    link: "courses",
  },
};

import CourseTwoImageOne from "/assets/imgs/thumb/course-four-1.webp";
import CourseTwoImageTwo from "/assets/imgs/thumb/course-four-2.webp";
import CourseTwoImageThree from "/assets/imgs/thumb/course-four-3.webp";

const courseTwo = {
  title: {
    sliceOne: "Success Stories",
  },
  subtitle:
    "We offer a diverse range of courses designed to help you acquire new skills, advance your career, and achieve your professional goals. Each course is carefully crafted to provide you with practical knowledge and hands-on experience in your chosen field.",
  filterOptions: [
    {
      name: "All",
      target: "*",
    },
    {
      name: "Trending",
      target: "trending",
    },
    {
      name: "Popular",
      target: "popular",
    },
    {
      name: "Featured",
      target: "featured",
    },
  ],
  courses: [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661774861781-e540fbc29330?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: {
        image: InstructorImageFive,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: " Aisha Patel, 31",
      company: "Cognizant",
      price: "$19.00",
      link: "course-detail",
      filterClass: "trending",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image:
        "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: {
        image: InstructorImageOne,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: " Aisha Patel, 31",
      company: "Cognizant",
      price: "$9.00",
      link: "course-detail",
      filterClass: "trending",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image:
        "https://images.unsplash.com/photo-1437572848259-df63caa1a552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: {
        image: InstructorImageTwo,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: " Aisha Patel, 31",
      company: "Cognizant",
      price: "$15.00",
      link: "course-detail",
      filterClass: "popular",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
  ],
  more: {
    name: "Browse More",
    icon: RightArrowWhiteIcon,
    link: "courses",
  },
};

import CourseThreeImageOne from "/assets/imgs/thumb/course-6-1.webp";
import CourseThreeImageTwo from "/assets/imgs/thumb/course-6-2.webp";
import CourseThreeImageThree from "/assets/imgs/thumb/course-6-3.webp";
import CourseThreeImageFour from "/assets/imgs/thumb/course-6-4.webp";

const courseThree = {
  title: "Our health coach online courses",
  courses: [
    {
      image: CourseThreeImageOne,
      title: "Prime & wellness coaching",
      link: "course-detail",
      description:
        "Develops positive lifestyle changes that last for areas including weight loss, balanced nutrition.",
      categories: [
        "Primary Care",
        "Physical Therapy",
        "Mental Health",
        "Care Navigation",
        "Coaching",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
    {
      image: CourseThreeImageTwo,
      title: "Fundamental health coaching",
      link: "course-detail",
      description:
        "Develops positive lifestyle changes that last for areas including weight loss, balanced nutrition.",
      categories: [
        "Primary Care",
        "Physical Therapy",
        "Mental Health",
        "Care Navigation",
        "Coaching",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
    {
      image: CourseThreeImageThree,
      title: "Stress management coaching",
      link: "course-detail",
      description:
        "Develops positive lifestyle changes that last for areas including weight loss, balanced nutrition.",
      categories: [
        "Primary Care",
        "Physical Therapy",
        "Mental Health",
        "Care Navigation",
        "Coaching",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
    {
      image: CourseThreeImageFour,
      title: "Behavioral Change Coaching",
      link: "course-detail",
      description:
        "Develops positive lifestyle changes that last for areas including weight loss, balanced nutrition.",
      categories: [
        "Primary Care",
        "Physical Therapy",
        "Mental Health",
        "Care Navigation",
        "Coaching",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
  ],
};

const courseFee = {
  title: "Course Fee",
  cards: [
    {
      title: "Online",
      amount: "$100",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        "Self-paced learning",
        "24/7 access",
        "Expert instructor",
        "Real world projects",
        "Access on all design tools and resources",
      ],
      buttonText: "Apply Now",
      type: "Online",
    },
    {
      title: "Hybrid",
      amount: "$200",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        "Self-paced learning",
        "24/7 access",
        "Expert instructor",
        "Real world projects",
        "Access on all design tools and resources",
      ],
      buttonText: "Apply Now",
      type: "Hybrid",
    },
  ],
};

export { courseOne, courseTwo, courseThree, courseFee };
