import React, { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { IconContext } from "react-icons";
import { PiGithubLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { useTranslation } from "react-i18next";

import "./Navbar.css";

const Navbar: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [menuState, setMenuState] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const polish = document.querySelector(".polish");

    polish?.classList.add("inactive");
  }, []);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const handleChangePl = () => {
    const polish = document.querySelector(".polish");
    const english = document.querySelector(".english");
    polish?.classList.remove("inactive");
    english?.classList.add("inactive");
    changeLanguage("pl");
  };
  const handleChangeEn = () => {
    const polish = document.querySelector(".polish");
    const english = document.querySelector(".english");
    polish?.classList.add("inactive");
    english?.classList.remove("inactive");
    changeLanguage("en");
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");

      if (window.scrollY >= 650) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clickMenu = () => {
    setMenuState(!menuState);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuState]);

  return (
    <>
      <div className="navbar">
        {screenWidth >= 1024 ? (
          <>
            <div
              className="menu-elements"
              data-aos-once="true"
              data-aos-duration="400"
              data-aos-easing="ease"
              data-aos="fade-down"
            >
              <div className="left">
                <p onClick={() => setMenuState(false)}>
                  <a href="#about" className="nav-element">
                    {t("about")}
                  </a>
                </p>
                <p onClick={() => setMenuState(false)}>
                  <a href="#portfolio" className="nav-element">
                    portfolio
                  </a>
                </p>
                <p onClick={() => setMenuState(false)}>
                  <a href="#contact" className="nav-element">
                    {t("contact")}
                  </a>
                </p>
              </div>

              <div className="right">
                <a href="https://github.com/mkarawan" title="Github">
                  <IconContext.Provider
                    value={{ color: "#90D8F3", size: "30px" }}
                  >
                    <div className="close">
                      <PiGithubLogo />
                    </div>
                  </IconContext.Provider>
                </a>
                <a
                  href="https://www.linkedin.com/in/mkarawan/"
                  title="LinkedIn"
                >
                  <IconContext.Provider
                    value={{ color: "#90D8F3", size: "30px" }}
                  >
                    <div className="close">
                      <PiLinkedinLogo />
                    </div>
                  </IconContext.Provider>
                </a>
                <div className="flags">
                  <img
                    className="polish"
                    title="PL"
                    onClick={handleChangePl}
                    src="/images/poland.png"
                    alt="polish-language"
                  />
                  <img
                    className="english"
                    title="EN"
                    onClick={handleChangeEn}
                    src="/images/united-kingdom.png"
                    alt="english-language"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {!menuState ? (
              <>
                <IconContext.Provider value={{ color: "black", size: "35px" }}>
                  <div className="open" onClick={clickMenu}>
                    <CgMenuRight />
                  </div>
                </IconContext.Provider>
              </>
            ) : (
              <>
                <div className="navigation-mobile">
                  <IconContext.Provider
                    value={{ color: "var(--dark-green", size: "35px" }}
                  >
                    <div className="close" onClick={clickMenu}>
                      <CgClose />
                    </div>
                  </IconContext.Provider>

                  <div className="left">
                    <p
                      onClick={() => setMenuState(false)}
                      data-aos-once="true"
                      data-aos-duration="300"
                      data-aos-easing="ease"
                      data-aos="fade-right"
                    >
                      <a href="#about" className="about-us-nav">
                        {t("about")}
                      </a>
                    </p>
                    <p
                      onClick={() => setMenuState(false)}
                      data-aos-once="true"
                      data-aos-duration="300"
                      data-aos-easing="ease"
                      data-aos="fade-right"
                      data-aos-delay="100"
                    >
                      <a href="#portfolio">portfolio</a>
                    </p>
                    <p
                      onClick={() => setMenuState(false)}
                      data-aos-once="true"
                      data-aos-duration="300"
                      data-aos-easing="ease"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <a href="#contact">{t("contact")}</a>
                    </p>
                  </div>

                  <div className="right">
                    <a href="https://github.com/mkarawan" title="Github">
                      <IconContext.Provider
                        value={{ color: "#e7b3ce", size: "35px" }}
                      >
                        <div
                          className="close"
                          data-aos-once="true"
                          data-aos-duration="300"
                          data-aos-easing="ease"
                          data-aos="fade-right"
                          data-aos-delay="300"
                        >
                          <PiGithubLogo />
                        </div>
                      </IconContext.Provider>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mkarawan/"
                      title="LinkedIn"
                    >
                      <IconContext.Provider
                        value={{ color: "#e7b3ce", size: "35px" }}
                      >
                        <div
                          className="close"
                          data-aos-once="true"
                          data-aos-duration="300"
                          data-aos-easing="ease"
                          data-aos="fade-right"
                          data-aos-delay="400"
                        >
                          <PiLinkedinLogo />
                        </div>
                      </IconContext.Provider>
                    </a>
                    <div className="flags">
                      <img
                        className="polish"
                        title="PL"
                        onClick={handleChangePl}
                        src="/images/poland.png"
                        alt="polish-language"
                        data-aos-once="true"
                        data-aos-duration="300"
                        data-aos-easing="ease"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      />
                      <img
                        className="english"
                        title="EN"
                        onClick={handleChangeEn}
                        src="/images/united-kingdom.png"
                        alt="english-language"
                        data-aos-once="true"
                        data-aos-duration="300"
                        data-aos-easing="ease"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
