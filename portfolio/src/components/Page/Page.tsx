import React, {useState, useRef} from "react";
import emailjs from "emailjs-com";
import { IconContext } from "react-icons";
import { PiGithubLogoDuotone } from "react-icons/pi";
import { PiReadCvLogoDuotone } from "react-icons/pi";

import { PiLinkedinLogoDuotone } from "react-icons/pi";


import "./Page.css";

const Page: React.FC = () => {
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
        <img className="orange" src="/images/orange-hero.png" />
        <h1>Hello</h1>
        <p>I'm Monika Karawan</p>
        <h2>Web Developer</h2>
        <img className="pink" src="/images/pink-hero-cut.png" />
      </section>
      <section className="about">
        <h1>Explore My Key Frontend Development Services</h1>
        <div className="services">
          <div>
            <img src="/images/services3.png" />{" "}
            <h2>Web Development Tailored to Your Needs</h2>
            <p>I create custom websites that reflect your brand.</p>
          </div>
          <div>
            <img src="/images/services2.png" />
            <h2>Responsive Design for All Devices</h2>
            <p>Your website will look great on any screen.</p>
          </div>
          <div>
            <img src="/images/services1.png" />
            <h2>Performance Optimization for Speed and Efficiency</h2>
            <p>I ensure your site runs smoothly and quickly.</p>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="portfolio-heading">
          <h1>Explore My Recent Work</h1>
          <p>A collection of my best frontend projects.</p>
          <img src="/images/flowers.png" />
        </div>

    <div className="container">
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
                <div className="title">Call time manager App</div>
                <div className="sub-line">
                  <div className="subtitle">
                    PWA app made during Fintegrow internship to make monitoring
                    conversation durations easier.
                  </div>
                </div>
                <button className="violet-btn visit-btn">Visit</button>

              </label>
            )}
            {selectedItem === "item-2" && (
              <label className="website-info" id="website-info-2">
                <div className="title">dwadęby.pl</div>
                <div className="sub-line">
                  <div className="subtitle">Website for Dwa Dęby agritourism, my first commercial project.</div>
                </div>
                <button className="violet-btn visit-btn">Visit</button>

              </label>
            )}
            {selectedItem === "item-3" && (
              <label className="website-info" id="website-info-3">
                <div className="title">Green Solutions</div>
                <div className="sub-line">
                  <div className="subtitle">Website created for the fictional company GreenSolutions for educational purposes</div>
                </div>
                <button className="violet-btn visit-btn">Visit</button>
              </label>
            )}
          </div>
        </div>
      </div>
    </div>


        {/* <div className="portfolio-websites">
          <div className="website">
            <img />
            <h2>Call time manager App</h2>
            <p>A collection of my best frontend projects.</p>{" "}
            <button>Visit</button>{" "}
            <img className="wave" src="/images/wave.png" />
          </div>
          <div className="website">
            <img />
            <h2>Dwa Dęby website</h2>
            <p>A collection of my best frontend projects.</p>{" "}
            <button>Visit</button>{" "}
            <img className="wave" src="/images/wave.png" />
          </div>
          <div className="website">
            <img />
            <h2>Green solutions website</h2>
            <p>A collection of my best frontend projects.</p>{" "}
            <button>Visit</button>{" "}
            <img className="wave" src="/images/wave.png" />
          </div>
          <div className="website">
            <img />
            <h2>E-commerce website</h2>
            <p>A collection of my best frontend projects.</p>{" "}
            <button>Visit</button>{" "}
            <img className="wave" src="/images/wave.png" />
          </div>
          <div className="website">
            <img />
            <h2>E-commerce website</h2>
            <p>A collection of my best frontend projects.</p>{" "}
            <button>Visit</button>{" "}
            <img className="wave" src="/images/wave.png" />
          </div>
          <div className="website">
            <img />
            <h2>E-commerce website</h2>
            <p>A collection of my best frontend projects.</p>{" "}
            <button>Visit</button>
            <img className="wave" src="/images/wave.png" />
          </div>
        </div> */}
        
        {/* <button className="violet-btn download">Download my Resume</button> */}
      </section>
      <section className="build">
        <img className="stripes" src="/images/stripes.png" />
        <div className="build-grid">
          <h1>Let's Build Your Dream Website</h1>
          <p>
            Contact me today to discuss how I can elevate your online presence
            with stunning web development.
          </p>
          <img src="/images/stars.png" />
        </div>
      </section>
      <section className="contact">
        <div>
          <img src="/images/email.png" />
          <h2>Email</h2>
          <p>monika.karawann@gmail.com</p>
        </div>
        <div>
          <img src="/images/phone.png" />
          <h2>Phone</h2>
          <p>+48 532-328-386</p>
        </div>
      </section>
      <section className="contact-form">
        
        <div className="form">
        <h1>Contact me now</h1>

          <form ref={form} onSubmit={sendEmail}>

            <p>Name</p>
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
            <p>Message</p>
            <textarea
              placeholder="Write your message here"
              name="message"
              required
              value={text}
              onChange={handleTextChange}
            ></textarea>
            <button className="violet-btn" type="submit">
              Send
            </button>
          </form>
          {sent && <p>Message sent</p>}
          {error && <p>Error</p>}
        </div>
        <div className="contact-img">
          {" "}
          <img src="/images/mail.png" alt="Email photo" />
        </div>
      </section>

    
      <footer>
        <p>Copyright © 2024 Monika Karawan</p>
        <div><a href="https://github.com/mkarawan" title="Github">
        <IconContext.Provider
                    value={{ color: "#C85C19", size: "35px" }}
                  >
                    <div className="close">
                    <PiGithubLogoDuotone />
                    </div>
                  </IconContext.Provider>
        </a>
       <a href="https://www.linkedin.com/in/mkarawan/" title="LinkedIn">
       <IconContext.Provider
                    value={{ color: "#C85C19", size: "35px" }}
                  >
                    <div className="close" >
                    <PiLinkedinLogoDuotone />

                    </div>
                  </IconContext.Provider>
       </a>
       <a href="" title="Download my resume">
       <IconContext.Provider
                    value={{ color: "#C85C19", size: "35px" }}
                  >
                    <div className="close" >
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
