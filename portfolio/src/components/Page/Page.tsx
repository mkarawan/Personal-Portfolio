import React from "react";
import "./Page.css";

const Page: React.FC = () => {
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
          <h1>
            Explore My <br />
            Recent Work
          </h1>
          <p>A collection of my best frontend projects.</p>
          <img src="/images/flowers.png" />
        </div>
        <div className="portfolio-websites">
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
        </div>
        <button className="download">Download my Resume</button>
      </section>
      <section className="build">
        <img className="stripes" src="/images/stripes.png" />
        <div className="build-grid">
          <h1>Let's Build Your Dream Website</h1>
          <p>
            Contact Monika today to discuss how she can elevate your online
            presence with stunning web development.
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
      </section>
      <section className="contact">
        <div>
          <img src="/images/phone.png" />
          <h2>Phone</h2>
          <p>+48 532-328-386</p>
        </div>
      </section>
    </>
  );
};

export default Page;
