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
      link: "course-detail/uidesign",
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
      link: "course-detail/marketing",
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
      link: "course-detail/analytics",
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
import { duration } from "@mui/material";

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

const courseHighlightsUI = {
  title: "Course Highlights",
  info: [
    { title: "duration", details: "6 Months" },
    {
      title: "format",
      details: "Online/Hybrid",
    },
    {
      title: "average package",
      details: "6LPA",
    },
    {
      title: "placement guarantee",
      details: "Get a Job in UI/UX Design or Your Money Back!",
    },
  ],
  accordion: [
    {
      title: "Module 1: Introduction to Design",
      content: [
        "What is Design?",
        "Introduction to UI (User Interface) and UX (User Experience)",
        "Differences and Relationships between UI and UX",
      ],
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 2: Fundamental Design Principles",
      content: [
        "Color Theory",
        "Typography",
        "Layouts and Composition",
        "Visual Hierarchy",
      ],
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 3: Design Thinking",
      content: [
        "Overview of Design Thinking",
        "Stages: Empathize, Define, Ideate, Prototype, Test",
      ],
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 4: Research Methods",
      content: [
        "Conducting User Interviews",
        "Creating and Analyzing Surveys",
        "Identifying User Needs and Pain Points",
        "Analyzing Competitors",
        "Identifying Market Trends and Opportunities",
      ],
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 5: Wireframing and Prototyping",
      content: [
        "Introduction to Wireframes",
        "Tools for Wireframing (e.g., Balsamiq, Figma)",
        "Creating Interactive Prototypes",
        "Tools for Prototyping (e.g., Figma, Adobe XD)",
      ],
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },

    {
      title: "Module 6: User Interface Design",
      content: [
        "Overview of Design Tools (e.g., Figma, Adobe XD)",
        "Creating and Using UI Elements",
        "Designing Engaging Interfaces",
        "Principles of Responsive Design",
      ],
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 7: Interaction Design",
      content: [
        "Understanding Affordances and Feedback",
        "Designing User Flows and Journeys",
        "Conducting Usability Tests",
        "Iterating on Designs",
        "Gathering and Analyzing Feedback",
      ],
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 8: Technical Understanding and Project Management",
      content: [
        "Introduction to HTML and CSS",
        "Understanding How Designs Are Implemented",
        "Managing Design Projects and Timelines",
        "Building a Portfolio",
        "Preparing for Job Applications",
      ],
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 9: Hands-On Projects",
      content: [
        "Project 1: Personal Website",
        "Project 2: Mobile App Design",
        "Conducting Usability Tests",
        "Project 3: Redesign Project",
        "Gathering and Analyzing Feedback",
      ],
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 10: Job Preparation",
      content: [
        "Crafting a UI/UX-Focused Resume",
        "Writing a Compelling Cover Letter",
        "Preparing for Common UI/UX Interview Questions",
        "Practicing Design Challenges and Portfolio Reviews",
      ],
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
  ],
};

const courseHighlightsMarketing = {
  title: "Course Highlights",
  accordion: [
    {
      title: "1. Digital Marketing Foundations: Your First Steps",
      content: [
        "Introduction to Digital Marketing and Key Concepts",
        "Marketing Channels Overview (SEO, SEM, Social Media, Email)",
        "Market Research and Understanding Consumer Behavior",
        "Identifying Target Audience and Creating Buyer Personas",
      ],
      project:
        "Conduct a brand audit and develop a strategic marketing plan to enhance its online presence. Focus on audience targeting and channel selection.",
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "2. Create and Optimize Your Website for Search Engines",
      content: [
        "Website Creation Essentials (CMS, Design Principles, User Experience)",
        "On-Page SEO Best Practices (Keyword Research, Meta Tags, Content Optimization)",
        "Technical SEO (Site Speed, Mobile Optimization, Sitemap Configuration)",
      ],
      project:
        "Build a business website, implement SEO best practices, and optimize for target keywords. Monitor performance using analytics tools.",
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "3. Mastering Paid Search and Google Ads",
      content: [
        "Introduction to Google Ads and SEM",
        "Keyword Research, Campaign Planning, and Budgeting",
        "Creating Effective Ad Copies and A/B Testing",
        "Bidding Strategies, Ad Extensions, and Quality Score Optimization",
        "Monitoring and Optimizing Campaign Performance",
        "Analytics and Reporting: Tracking ROI",
        "SEM Campaign Case Studies",
        "Compliance, Policies, and Best Practices",
      ],
      project:
        "Develop a Google Ads campaign for a product or service. Focus on keyword research, ad creation, and optimizing for better click-through and conversion rates.",
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "4. Organic Social Media: Growing Your Audience Without Ads",
      content: [
        "Social Media Strategy Development",
        "Platform-Specific Marketing: Facebook, Instagram, LinkedIn, etc.",
        "Creating Engaging Content: Visuals, Copywriting, and Scheduling",
        "Community Building, Engagement, and Growth Tactics",
        "Analytics and Performance Tracking for Organic Reach",
        "Leveraging Influencers and User-Generated Content",
        "Crisis Management on Social Media",
        "Ethics and Compliance in Social Media Marketing",
      ],
      project:
        "Create and execute a 30-day organic social media campaign for a brand. Plan content, drive engagement, and analyze key performance metrics.",
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "5. Advanced Social Media Advertising Strategies",
      content: [
        "Paid Social Media Advertising (Facebook Ads, Instagram Ads, LinkedIn Ads, etc.)",
        "Audience Targeting and Segmentation Strategies",
        "Designing High-Converting Ad Campaigns",
        "Budgeting, Bidding, and Ad Scheduling",
        "Analytics, Reporting, and A/B Testing",
        "Retargeting Strategies and Lookalike Audiences",
      ],
      project:
        "Design a paid social media campaign for a product launch. Develop ad creatives, set up targeting, and track conversions and ROI.",
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "6. Convert Leads with Strategic Sales Funnels",
      content: [
        "Lead Generation Techniques for Different Industries",
        "Building and Managing Sales Funnels",
        "Email Marketing Automation and Drip Campaigns",
        "Customer Retention and Lifecycle Marketing",
      ],
      project:
        "Build an automated lead nurturing funnel. Design email sequences for customer engagement, reselling, and retention, tracking performance over time.",
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "7. Unlocking Insights with Google Analytics",
      content: [
        "Setting Up Google Analytics: Tracking Codes, Goals, and Events",
        "Understanding Key Metrics and Reports: Audience, Acquisition, Behavior",
        "E-commerce Tracking and Sales Funnels",
        "Advanced Reporting and Dashboard Creation",
      ],
      project:
        "Implement Google Analytics for an e-commerce site, set up conversion tracking, and deliver insights to optimize the customer journey and boost sales.",
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "8. Building a Comprehensive Digital Marketing Strategy",
      content: [
        "Integrating Multiple Channels for a Cohesive Strategy",
        "Budgeting, Resource Allocation, and Scaling Strategies",
        "Industry Trends and Future-Proofing Skills",
      ],
      project:
        "Design a comprehensive digital marketing blueprint, incorporating SEO, SEM, social media, and email marketing into a unified plan. Present a strategic roadmap for growth.",
      button: "Project: Design a basic wireframe for a mobile app.",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
  ],
};

const courseHighlightsAnalytics = {
  title: "Course Highlights",
  info: [
    { title: "duration", details: "6 Months" },
    {
      title: "format",
      details: "Online/Hybrid",
    },
    {
      title: "average package",
      details: "6LPA",
    },
    {
      title: "placement guarantee",
      details: "Get a Job in Data Analytics or Your Money Back!",
    },
  ],
  accordion: [
    {
      title: "Module 1: Introduction to Data Analytics and Excel Basics",
      content: [
        "Overview of Data Analytics",
        "Basic Excel Features: Functions, Formulas, and Data Entry",
        "Data Cleaning and Visualization with Charts and Graphs",
        "Introduction to PivotTables",
      ],
      button: "Project: Sales Data Analysis Using Excel",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 2: Advanced Excel for Data Analysis",
      content: [
        "Advanced Excel Functions: VLOOKUP, IF, and Data Validation",
        "Using Excel for Simple Statistical Analysis",
        "Introduction to Excel Dashboards",
      ],
      button: "Project: Customer Data Segmentation",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 3: SQL Basics for Data Analysis",
      content: [
        "Introduction to SQL and Databases",
        "Writing Basic SQL Queries: SELECT, WHERE, and JOIN",
        "Sorting and Filtering Data",
        "Introduction to Aggregation (SUM, COUNT, AVG)",
      ],
      button: "Project: Product Sales Analysis Using SQL",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 4: Intermediate SQL Techniques",
      content: [
        "More Advanced Joins and Subqueries",
        "Grouping and Aggregating Data",
        "Introduction to Data Filtering Techniques",
      ],
      button: "Project: E-commerce Data Insights with SQL",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 5: Introduction to Python for Data Analysis",
      content: [
        "Basics of Python Programming",
        "Working with Data Using Pandas",
        "Cleaning and Manipulating Data in Python",
        "Simple Data Visualization with Matplotlib",
      ],
      button: "Project: Analyzing Student Performance Data Using Python",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 6: Data Visualization with Power BI",
      content: [
        "Getting Started with Power BI",
        "Connecting Data Sources and Creating Reports",
        "Building Simple Visualizations and Dashboards",
        "Sharing Reports",
      ],
      button: "Project: Sales Performance Dashboard Using Power BI",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 7: Practical Applications of Data Analytics",
      content: [
        "Real-Life Applications of Data Analytics",
        "Understanding Business Problems and Choosing Tools",
        "Simple Case Studies on Business Data Analysis",
      ],
      button: "Project: Basic Business Analytics Case Study",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
    {
      title: "Module 8: Capstone Project and Review",
      content: [
        "Recap of Key Concepts Across All Tools",
        "Best Practices for Data Analysis",
        "Presenting Findings and Insights",
      ],
      button: "Project: Final Project: Comprehensive Data Analysis",
      animation: {
        name: "fade-slide bottom",
        delay: "0.2",
      },
    },
  ],
};

export {
  courseOne,
  courseTwo,
  courseThree,
  courseFee,
  courseHighlightsUI,
  courseHighlightsMarketing,
  courseHighlightsAnalytics,
};
