import Logo from "/assets/imgs/logo/header-logo-white.svg";
import AppleStoreIcon from "/assets/imgs/icon/apple-icon.svg";
import PlayStoreIcon from "/assets/imgs/icon/play-stor.svg";

import Mail from "/assets/imgs/icon/mail-dark.webp";
import Phone from "/assets/imgs/icon/phone-dark.webp";
import Location from "/assets/imgs/icon/location-dark.webp";

const footerOne = {
  logo: Logo,
  title: "Our Apps",
  appleIcon: AppleStoreIcon,
  appleTitle: "Apps Store",
  appleLink: "#",
  playIcon: PlayStoreIcon,
  playTitle: "Play Store",
  playLink: "#",
  copyrightText: "© Skillhub 2024, Designed",
  companyName: "Academine",
  copyrightLink: "https://academine.com",
  widgets: [
    {
      title: "Courses",
      menus: [
        {
          name: "Creative",
          link: "courses",
        },
        {
          name: "Animation",
          link: "courses",
        },
        {
          name: "Web Design",
          link: "courses",
        },
        {
          name: "Business",
          link: "courses",
        },
        {
          name: "Marketing",
          link: "courses",
        },
      ],
    },
    {
      title: "Company",
      menus: [
        {
          name: "About Us",
          link: "about",
        },
        {
          name: "Blog",
          link: "blogs",
        },
        {
          name: "Course",
          link: "course-detail",
        },
        {
          name: "Instructor",
          link: "instructors",
        },
        {
          name: "404",
          link: "not_found",
        },
      ],
    },
    {
      title: "Help & Support",
      menus: [
        {
          name: "Help Guides",
          link: "contact",
        },
        {
          name: "Course Status",
          link: "course-detail",
        },
        {
          name: "Course Info",
          link: "course-detail",
        },
        {
          name: "Privacy Policy",
          link: "contact",
        },
        {
          name: "Contact us",
          link: "contact",
        },
      ],
    },
    {
      title: "Contact Us",
      menus: [
        {
          icon: Mail,
          name: "info@skillhub.info",
          link: "mailto:info@skillhub.info",
        },
        {
          icon: Phone,
          name: "(00) 123 456 789",
          link: "tel:(00)123456789",
        },
        {
          icon: Location,
          name: "East Katharina, Mto city,New York - 1206",
        },
      ],
    },
  ],
};

import MicroBusImage from "/assets/imgs/icon/microbus.svg";
import FooterTwoLogo from "/assets/imgs/logo/children-logo.webp";
import StarRedShape from "/assets/imgs/shape/star-red.webp";
import ShapeGreen from "/assets/imgs/shape/shape-green.webp";
import FtShape from "/assets/imgs/shape/ft-shape.webp";

const footerTwo = {
  microBusImage: MicroBusImage,
  footerTwoLogo: FooterTwoLogo,
  appleStoreIcon: AppleStoreIcon,
  playStoreIcon: PlayStoreIcon,
  starRedShape: StarRedShape,
  shapeGreen: ShapeGreen,
  ftShape: FtShape,
};

const footerThree = {
  title: {
    sliceOne: "Subscribe for exclusive offers,",
    sliceTwo: "Giveaways",
    sliceThree: "& more",
  },
  btnText: "Join Now",
  widgets: [
    {
      name: "About Us",
      menus: [
        {
          name: "About Us",
          link: "about",
        },
        {
          name: "Health professional",
          link: "courses",
        },
        {
          name: "Blog",
          link: "blogs",
        },
        {
          name: "Contact",
          link: "contact",
        },
      ],
    },
    {
      name: "Our Course",
      menus: [
        {
          name: "Fundamental health coaching",
          link: "course-detail",
        },
        {
          name: "Prime wellness coaching",
          link: "course-detail",
        },
        {
          name: "Stress management coaching",
          link: "course-detail",
        },
        {
          name: "Behavioral Change Coaching",
          link: "course-detail",
        },
      ],
    },
    {
      name: "Our Apps",
      menus: [
        {
          name: "Apps Store",
          link: "course-detail",
          icon: AppleStoreIcon,
          className: "btn-appStore btn-hover-effect",
        },
        {
          name: "Play Store",
          link: "course-detail",
          icon: PlayStoreIcon,
          className: "btn-playstor btn-hover-effect",
        },
      ],
    },
  ],
};

export { footerOne, footerTwo, footerThree };
