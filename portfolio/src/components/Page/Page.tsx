import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { IconContext } from "react-icons";
import { PiGithubLogoDuotone } from "react-icons/pi";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import { TbMessageHeart } from "react-icons/tb";
import { PiLinkedinLogoDuotone } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import "./Page.css";

const Page: React.FC = () => {
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState<string>("item-1");
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target?.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target?.value);
  };
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target?.value);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_zodenhc",
          "template_frbql9i",
          form.current,
          "P-96Pw0kXZFRvCdwO"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setSent(true);
            setError(null);
            setName("");
            setEmail("");
            setText("");
          },
          (error) => {
            console.log("FAILED...", error.text);
            setError("Wystąpił błąd podczas wysyłania wiadomości.");
            setSent(false);
          }
        );
    }
  };

  return (
    <>
      <section className="hero">
        <img
          data-aos-once="true"
          data-aos-duration="800"
          data-aos-easing="ease"
          data-aos="fade-down-right"
          className="orange"
          src="/images/orange-hero.png"
          alt="orange-shape"
        />
        <h1
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-easing="ease"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          {t("hello")}
        </h1>

        <div>
          <p
            data-aos-once="true"
            data-aos-duration="600"
            data-aos-easing="ease"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {t("am")} Monika Karawan
          </p>
          <h2
            data-aos-once="true"
            data-aos-duration="600"
            data-aos-easing="ease"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Web Developer
          </h2>
        </div>

        <img
          className="pink"
          src="/images/pink-hero-cut.png"
          alt="pink-shape"
          data-aos-once="true"
          data-aos-duration="800"
          data-aos-easing="ease"
          data-aos="fade-up-left"
        />
      </section>
      <section className="about" id="about">
        <h1
          data-aos-once="true"
          data-aos-duration="600"
          data-aos-easing="ease"
          data-aos="fade-up"
        >
          {t("about-h1")}
        </h1>
        <div className="services">
          <div
            data-aos-once="true"
            data-aos-duration="600"
            data-aos-easing="ease"
            data-aos-delay="400"
            data-aos="fade-up"
          >
            <img src="/images/services3.png" alt="service1" />{" "}
            <h2>{t("service1-h1")}</h2>
            <p>{t("service1-p")}</p>
          </div>
          <div
            data-aos-once="true"
            data-aos-duration="600"
            data-aos-easing="ease"
            data-aos-delay="600"
            data-aos="fade-up"
          >
            <img src="/images/services2.png" alt="service2" />
            <h2>{t("service2-h1")}</h2>
            <p>{t("service2-p")}</p>
          </div>
          <div
            data-aos-once="true"
            data-aos-duration="600"
            data-aos-easing="ease"
            data-aos-delay="800"
            data-aos="fade-up"
          >
            <img src="/images/services1.png" alt="service3" />
            <h2>{t("service3-h1")}</h2>
            <p>{t("service3-p")}</p>
          </div>
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        <div
          className="portfolio-heading"
          data-aos-once="true"
          data-aos-duration="600"
          data-aos="fade-right"
        >
          <h1>{t("portfolio-h1")}</h1>
          <p> {t("portfolio-p")}</p>
          <img src="/images/flowers.png" alt="flower" />
        </div>

        <div
          className="container"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-easing="ease"
          data-aos-delay="200"
          data-aos="zoom-in"
        >
          <input
            type="radio"
            name="slider"
            id="item-1"
            checked={selectedItem === "item-1"}
            onChange={() => setSelectedItem("item-1")}
          />
          <input
            type="radio"
            name="slider"
            id="item-2"
            checked={selectedItem === "item-2"}
            onChange={() => setSelectedItem("item-2")}
          />
          <input
            type="radio"
            name="slider"
            id="item-3"
            checked={selectedItem === "item-3"}
            onChange={() => setSelectedItem("item-3")}
          />

          <div className="cards">
            <label className="card" htmlFor="item-1" id="website-1">
              <img
                className="website-img fintegrow"
                src="/images/fintegro.png"
                alt="PWA app"
              />
            </label>
            <label className="card" htmlFor="item-2" id="website-2">
              <img
                className="website-img"
                src="/images/dwadeby.png"
                alt="Dwa Dęby website"
              />
            </label>
            <label className="card" htmlFor="item-3" id="website-3">
              <img
                className="website-img"
                src="/images/gs.png"
                alt="Green Solutions website"
              />
            </label>
          </div>

          <div className="website-description">
            <div className="upper-part">
              <div className="info-area" id="test">
                {selectedItem === "item-1" && (
                  <label className="website-info" id="website-info-1">
                    <div className="title"> {t("web-title1")}</div>
                    <div className="sub-line">
                      <div className="subtitle">{t("web-info1")}</div>
                    </div>
                    <a href="https://minicrm.toadres.pl/">
                      <button className="violet-btn visit-btn">
                        {t("visit")}
                      </button>
                    </a>
                  </label>
                )}
                {selectedItem === "item-2" && (
                  <label className="website-info" id="website-info-2">
                    <div className="title">dwadęby.pl</div>
                    <div className="sub-line">
                      <div className="subtitle">{t("web-info2")}</div>
                    </div>
                  
                      <button className="violet-btn visit-btn grey-btn">
                        {t("progress")}
                      </button>
                   
                  </label>
                )}
                {selectedItem === "item-3" && (
                  <label className="website-info" id="website-info-3">
                    <div className="title">Green Solutions</div>
                    <div className="sub-line">
                      <div className="subtitle">{t("web-info3")}</div>
                    </div>
                    <a href="https://greensolutions-gs.netlify.app/">
                      <button className="violet-btn visit-btn">
                        {t("visit")}
                      </button>
                    </a>
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="build"
        data-aos-once="true"
        data-aos-duration="600"
        data-aos-easing="ease"
        data-aos="fade-in"
      >
        <img className="stripes" src="/images/stripes.png" alt="stripes" />
        <div className="build-grid">
          <h1
            data-aos-once="true"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos="fade-right"
          >
            {t("build-h1")}
          </h1>
          <p
            data-aos-once="true"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-delay="100"
            data-aos="fade-right"
          >
            {t("build-p")}
          </p>
          <img src="/images/stars.png" alt="stars" />
        </div>
      </section>
      <section className="contact">
        <div
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-easing="ease"
          data-aos="fade-down"
        >
          <img src="/images/email.png" alt="email" />
          <h2>Email</h2>
          <p>monika.karawann@gmail.com</p>
        </div>
        <div
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-easing="ease"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src="/images/phone.png" alt="phone" />
          <h2>{t("phone")}</h2>
          <p>+48 532-328-386</p>
        </div>
      </section>
      <section className="contact-form" id="contact">
        <div className="contact-box">
          <div className="form">
            <h1
              data-aos-once="true"
              data-aos-duration="600"
              data-aos-easing="ease"
              data-aos="fade-right"
            >
              {t("contact-h1")}
              <IconContext.Provider value={{ color: "#c5abf3", size: "45px" }}>
                <div className="contact-icon">
                  <TbMessageHeart />
                </div>
              </IconContext.Provider>
            </h1>

            <form
              ref={form}
              onSubmit={sendEmail}
              data-aos-once="true"
              data-aos-duration="600"
              data-aos-easing="ease"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <p>{t("name")}</p>
              <input
                type="text"
                name="user_name"
                required
                value={name}
                onChange={handleNameChange}
              ></input>
              <p>Email</p>
              <input
                type="email"
                name="user_email"
                required
                value={email}
                onChange={handleEmailChange}
              ></input>
              <p>{t("message")}</p>
              <textarea
                placeholder={t("placeholder")}
                name="message"
                required
                value={text}
                onChange={handleTextChange}
              ></textarea>
              <button className="violet-btn" type="submit">
                {t("send")}
              </button>
            </form>
            {sent && <p>{t("success")}</p>}
            {error && <p>{t("error")}</p>}
          </div>
          <div className="contact-img">
            {" "}
            <img
              src="/images/mail.png"
              alt="Email"
              data-aos-once="true"
              data-aos-duration="600"
              data-aos-easing="ease"
              data-aos="zoom-in"
              data-aos-delay="160"
            />
          </div>
        </div>
      </section>

      <footer>
        <p>Copyright © 2024 Monika Karawan</p>
        <div>
          <a href="https://github.com/mkarawan" title="Github">
            <IconContext.Provider value={{ color: "#C85C19", size: "35px" }}>
              <div className="close">
                <PiGithubLogoDuotone />
              </div>
            </IconContext.Provider>
          </a>
          <a href="https://www.linkedin.com/in/mkarawan/" title="LinkedIn">
            <IconContext.Provider value={{ color: "#C85C19", size: "35px" }}>
              <div className="close">
                <PiLinkedinLogoDuotone />
              </div>
            </IconContext.Provider>
          </a>
          <a
            href="/CV.pdf"
            download="CV Monika Karawan"
            title="Download my resume"
          >
            <IconContext.Provider value={{ color: "#C85C19", size: "35px" }}>
              <div className="close">
                <PiReadCvLogoDuotone />
              </div>
            </IconContext.Provider>
          </a>
        </div>
        <p>Made with 💗</p>
      </footer>
    </>
  );
};

export default Page;
