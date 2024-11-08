import React, { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { IconContext } from "react-icons";
import { IoLogoFacebook } from "react-icons/io5";

import "./Navbar.css";

const Navbar: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [menuState, setMenuState] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");

      if (
        window.scrollY >= 650
        
      ) {
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
        {screenWidth >= 900 ? (
          <>
            <div className="menu-elements">
              <div className="left">
            
                    <p onClick={() => setMenuState(false)}>
                      <a className="about-us-nav">about</a>
                    </p>
                      <p onClick={() => setMenuState(false)}>
                        <a>portfolio</a>
                      </p>
                      <p onClick={() => setMenuState(false)}>
                        <a>contact</a>
                      </p>
              

              </div>

              <div className="right">
                <IconContext.Provider
                  value={{ color: "black", size: "25px" }}
                >
                  <a href="">
                    <div>
                      <IoLogoFacebook />
                    </div>
                  </a>
                </IconContext.Provider>
              
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
            
            <p onClick={() => setMenuState(false)}>
              <a className="about-us-nav">about</a>
            </p>
              <p onClick={() => setMenuState(false)}>
                <a>portfolio</a>
              </p>
              <p onClick={() => setMenuState(false)}>
                <a>contact</a>
              </p>
      

      </div>

      <div className="right">
        <IconContext.Provider
          value={{ color: "black", size: "25px" }}
        >
          <a href="">
            <div>
              <IoLogoFacebook />
            </div>
          </a>
        </IconContext.Provider>
      
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