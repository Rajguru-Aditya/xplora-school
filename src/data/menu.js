import DemoOne from "/assets/imgs/demo/1.png";
import DemoTwo from "/assets/imgs/demo/2.png";
import DemoThree from "/assets/imgs/demo/3.png";
import ComingSoonDemo from "/assets/imgs/demo/8.png";

const megaMenuOne = [
  {
    name: "Top 10",
    items: [
      {
        image: DemoOne,
        link: "/online-course",
        title: "Online Course",
      },
      {
        image: DemoTwo,
        link: "/children-education",
        title: "Kids Education",
      },
      {
        image: DemoThree,
        link: "/health-coach",
        title: "Health Course",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Course Platfrome",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Online University",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Chef",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "AI Course Learning",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Devs Coaching",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Language Academy",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Business Coach",
      },
    ],
  },
  {
    name: "Online Course",
    items: [
      {
        image: DemoOne,
        link: "/online-course",
        title: "Online Course",
      },
    ],
  },
  {
    name: "Kids Education",
    items: [
      {
        image: DemoTwo,
        link: "/children-education",
        title: "Kids Education",
      },
    ],
  },
  {
    name: "Health Coach",
    items: [
      {
        image: DemoThree,
        link: "/health-coach",
        title: "Health Coach",
      },
    ],
  },
  {
    name: "Course Platfrome",
    items: [
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Course Platfrome",
      },
    ],
  },
  {
    name: "Online University",
    items: [
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Online University",
      },
    ],
  },
  {
    name: "Chef",
    items: [
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Chef",
      },
    ],
  },
];

const menus = [
  {
    name: "Home",
    link: "#",
    megaMenu: megaMenuOne,
    subMenus: [
      {
        link: "/online-course",
        name: "Online Course",
      },
      {
        link: "/children-education",
        name: "Kids Education",
      },
      {
        link: "/health-coach",
        name: "Health Course",
      },
    ],
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Courses",
    link: "#",
    subMenus: [
      {
        name: "Course List",
        link: "/courses",
      },
      {
        name: "Course Detail",
        link: "/course-detail",
      },
      {
        name: "Course Filter",
        link: "/course-filter",
      },
    ],
  },
  {
    name: "Pages",
    link: "#",
    subMenus: [
      {
        name: "Instructor",
        link: "/instructors",
      },
      {
        name: "Instructor Detail",
        link: "/instructor-detail",
      },
      {
        name: "404",
        link: "not-found",
      },
    ],
  },
  {
    name: "Blog",
    link: "#",
    subMenus: [
      {
        name: "Blog List",
        link: "/blogs",
      },
      {
        name: "Blog Sidebar",
        link: "#",
        menus: [
          {
            name: "Right Sidebar",
            link: "/blogs",
          },
          {
            name: "Left Sidebar",
            link: "/blog-left-sidebar",
          },
        ],
      },
      {
        name: "Blog Layout",
        link: "#",
        menus: [
          {
            name: "1 Column",
            link: "/blog-column-one",
          },
          {
            name: "2 Column",
            link: "/blog-column-two",
          },
          {
            name: "3 Column",
            link: "/blog-column-three",
          },
          {
            name: "4 Column",
            link: "/blog-column-four",
          },
        ],
      },
      {
        name: "Blog Details",
        link: "#",
        menus: [
          {
            name: "Right Sidebar",
            link: "/blog-detail-right-sidebar",
          },
          {
            name: "Left Sidebar",
            link: "/blog-detail-left-sidebar",
          },
          {
            name: "Without Sidebar",
            link: "/blog-detail",
          },
        ],
      },
    ],
  },
  {
    name: "Conatct",
    link: "/contact",
  },
];

export default menus;
