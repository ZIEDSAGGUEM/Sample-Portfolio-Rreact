import React, { useEffect } from "react";
import "./Styles.css";
import Typed from "react-typed";
import CV from "../CV.pdf";
import { Button } from "react-bootstrap";
import aos from "aos";
import "aos/dist/aos.css";

const textLines = [`A React Developper`, `A Data Analyst`, `A Coder`];

const Header = () => {
  useEffect(() => {
    aos.init({ duration: 2500 });
  });
  return (
    <div className="header">
      <div class="text-white">
        <div class="container py-4">
          <h1 className="text-center" data-aos="fade-left">
            Introduction About Me
          </h1>
          <h3 class="display-6 fw-bold text-center" data-aos="fade-right">
            My Name is <span className="animate">ZIED SAGUEM</span>
          </h3>
          <h2 className="display-4 fw-200" data-aos="fade-down">
            I am{" "}
            <span className="display-5 fs-1">
              {" "}
              <Typed
                strings={textLines}
                typeSpeed={60}
                startDelay={300}
                backSpeed={100}
                backDelay={100}
                loop={true}
              />
            </span>
          </h2>
          <p class="col-md-8 fs-5" data-aos="fade-down">
            I am a second-year Computer Science student at ISIMS with a strong
            interest in AI and web development. Proficient in Python and
            statistical modeling, I excel at extracting insights from large
            datasets. Passionate about AI, I have knowledge of machine learning.
            Additionally, I am skilled in ReactJS and Bootstrap for creating
            responsive websites.
          </p>
          <a href={CV} download="CV" target="_blank">
            <Button
              className="btn btn-primary btn-sm p-2"
              type="button"
              data-aos="fade-down"
            >
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
