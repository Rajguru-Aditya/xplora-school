import menus from "@/data/menu";
import { useThemeContext } from "@/context/ThemeContext";

import CanvasAbout from "/assets/imgs/bg/canvas-about.png";
import MenuIconOne from "/assets/imgs/menu-icon/s1.svg";
import MenuIconTwo from "/assets/imgs/menu-icon/s2.svg";
import MenuIconThree from "/assets/imgs/menu-icon/s3.svg";
import MenuIconFour from "/assets/imgs/menu-icon/s4.svg";
import MenuIconFive from "/assets/imgs/menu-icon/s5.svg";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons/SocialIcons";

export default function Offcanvas() {
  const {
    openSubMenuIndex,
    setOpenSubMenuIndex,
    toggleSubMenu,
    toggleMobileMenu,
  } = useThemeContext();
  const pathName = "/";
  const routePath = pathName == "/" ? pathName : pathName.replace(/^\/+/g, "");

  const checkActiveMenu = (menu) => {
    if (menu.to == "#" && menu.subMenus && menu.subMenus.length > 0) {
      return menu.subMenus.find((subMenu) => subMenu.to == routePath)
        ? "active"
        : "";
    }

    return routePath == menu.to ? "active" : "";
  };

  const hideMobileMenu = (index = null) => {
    toggleMobileMenu();
    setOpenSubMenuIndex(index);
  };
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
      <div className="c-backdrop" onClick={toggleMobileMenu}></div>
      <button
        type="button"
        className="offcanvas-icon"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        onClick={toggleMobileMenu}
      >
        <i className="ph ph-x" />
      </button>
      <div className="offcanvas-inner">
        <div className="offcanvas-body">
          <div className="mobile_menu_nav">
            {menus && menus.length > 0 && (
              <ul className="menu_list">
                {menus.map((menu, index) => (
                  <li
                    key={index}
                    className={`menu-item ${
                      menu.subMenus && menu.subMenus.length > 0
                        ? "menu-item-has-children"
                        : ""
                    } ${openSubMenuIndex === index ? "show" : ""}`}
                  >
                    <Link
                      to={menu.name == "Courses" ? "/courses" : `${menu.link}`}
                      // onClick={(event) =>
                      //   menu.subMenus && menu.subMenus.length > 0
                      //     ? toggleSubMenu(index, event)
                      //     : hideMobileMenu(null)
                      // }
                      className={`${checkActiveMenu(menu)}`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="offcanvas-social">
          <SocialIcons />
        </div>
        <div className="offcanvas-copyright">
          <p className="mb-0 text-center">© Xplora 2024</p>
        </div>
      </div>
    </div>
  );
}
