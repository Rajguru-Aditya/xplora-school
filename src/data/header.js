import LogoOne from "/assets/imgs/logo/header-logo-black.svg";
import LogoTwo from "/assets/imgs/logo/logo-children.webp";
import LogoThree from "/assets/imgs/logo/health-coach-logo.webp";
import SearchIcon from "/assets/imgs/icon/search-icon.svg";
import CartIcon from "/assets/imgs/icon/cart-icon.svg";

import CategoryMenuOneIconOne from "/assets/imgs/menu-icon/2.svg";
import CategoryMenuOneIconTwo from "/assets/imgs/menu-icon/3.svg";
import CategoryMenuOneIconThree from "/assets/imgs/menu-icon/4.svg";
import CategoryMenuOneIconFour from "/assets/imgs/menu-icon/5.svg";
import CategoryMenuOneIconFive from "/assets/imgs/menu-icon/6.svg";
import CategoryMenuOneIconSix from "/assets/imgs/menu-icon/7.svg";

const HeaderOne = {
  logo: LogoOne,
  searchIcon: SearchIcon,
  cartIcon: CartIcon,
  categories: [
    {
      name: "Graphic Design",
      link: "courses",
      icon: CategoryMenuOneIconOne,
    },
    {
      name: "Web Development",
      link: "courses",
      icon: CategoryMenuOneIconTwo,
    },
    {
      name: "Digital Marketing",
      link: "courses",
      icon: CategoryMenuOneIconThree,
    },
    {
      name: "It and Software",
      link: "courses",
      icon: CategoryMenuOneIconFour,
    },
    {
      name: "Development",
      link: "courses",
      icon: CategoryMenuOneIconFive,
    },
    {
      name: "Data Science",
      link: "courses",
      icon: CategoryMenuOneIconSix,
    },
  ],
};

const headerTwo = {
  logo: LogoTwo,
  searchIcon: SearchIcon,
  cartIcon: CartIcon,
  link: "children-education",
};

const headerThree = {
  logo: LogoThree,
  searchIcon: SearchIcon,
  cartIcon: CartIcon,
  link: "children-education",
};
export { HeaderOne, headerTwo, headerThree };
