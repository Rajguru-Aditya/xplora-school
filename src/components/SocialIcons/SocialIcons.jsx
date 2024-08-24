import { Link } from "react-router-dom";
import MenuIconOne from "/assets/imgs/menu-icon/s1.svg";
import MenuIconTwo from "/assets/imgs/menu-icon/s2.svg";
import MenuIconThree from "/assets/imgs/menu-icon/s3.svg";
import MenuIconFour from "/assets/imgs/menu-icon/s4.svg";
import MenuIconFive from "/assets/imgs/menu-icon/s5.svg";

const SocialIcons = () => {
  return (
    <section className="social-icons">
      <a
        href="https://www.instagram.com/XploraSchool"
        alt="Youtube"
        target="_blank"
      >
        <img
          src="https://img.icons8.com/ios/50/555555/instagram-new--v1.png"
          alt="Instagram"
          className="social-icons__icon social-icons__icon--instagram"
        />
      </a>
      <a
        href="https://www.youtube.com/@xploraschool"
        alt="Youtube"
        target="_blank"
      >
        <img
          src="https://img.icons8.com/ios/50/555555/youtube-play--v1.png"
          alt="Youtube"
          className="social-icons__icon social-icons__icon--youtube"
        />
      </a>
      <a
        href="https://www.facebook.com/xploraschool/"
        alt="Youtube"
        target="_blank"
      >
        <img
          src="https://img.icons8.com/ios/50/555555/facebook-new.png"
          alt="Facebook"
          className="social-icons__icon social-icons__icon--facebook"
        />
      </a>
    </section>
  );
};

export default SocialIcons;
