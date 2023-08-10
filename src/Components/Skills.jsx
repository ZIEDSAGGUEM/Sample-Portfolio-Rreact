import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    aos.init({ duration: 2500 });
  });
  return (
    <div className="">
      <h1 className="text-center text-primary pt-5 pb-5" data-aos="fade-up">
        My Skills in Front-End
      </h1>
      <div className="container w-50">
        <div class="bd-example-snippet bd-code-snippet">
          <div class="bd-example">
            <h2 className="text-white text-center">HTML</h2>
            <div
              class="progress mb-3 w-100"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar"
                data-aos="fade-right"
                style={{ width: "95%" }}
              >
                95%
              </div>
            </div>
          </div>
          <h2 className="text-white text-center">CSS</h2>
          <div
            class="progress mb-3 w-100"
            role="progressbar"
            aria-label="Success example with label"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-success"
              data-aos="fade-right"
              style={{ width: "70%" }}
            >
              70%
            </div>
          </div>
          <h2 className="text-white text-center">Bootstrap</h2>
          <div
            class="progress mb-3 w-100"
            role="progressbar"
            aria-label="Info example with label"
            aria-valuenow="74"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar text-bg-info "
              data-aos="fade-right"
              style={{ width: "74%" }}
            >
              74%
            </div>
          </div>
          <h2 className="text-white text-center">JavaScript</h2>

          <div
            class="progress mb-3 w-100"
            role="progressbar"
            aria-label="Warning example with label"
            aria-valuenow="63"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar text-bg-warning "
              data-aos="fade-right"
              style={{ width: "63%" }}
            >
              63%
            </div>
          </div>
          <h2 className="text-white text-center">React JS</h2>
          <div
            class="progress w-100"
            role="progressbar"
            aria-label="Danger example with label"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-danger"
              data-aos="fade-right"
              style={{ width: "77%" }}
            >
              77%
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-primary py-5" data-aos="fade-up">
        My Skills in Back-end
      </h1>
      <div className="container w-50 mt-5">
        <div class="bd-example-snippet bd-code-snippet">
          <div class="bd-example">
            <h2 className="text-white text-center">PHP</h2>
            <div
              class="progress mb-3 w-100"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar"
                data-aos="fade-right"
                style={{ width: "95%" }}
              >
                95%
              </div>
            </div>
          </div>
          <h2 className="text-white text-center">NodeJS</h2>
          <div
            class="progress mb-3 w-100"
            role="progressbar"
            aria-label="Success example with label"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-success"
              data-aos="fade-right"
              style={{ width: "70%" }}
            >
              70%
            </div>
          </div>
          <h2 className="text-white text-center">Python</h2>
          <div
            class="progress mb-3 w-100"
            role="progressbar"
            aria-label="Info example with label"
            aria-valuenow="74"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar text-bg-info "
              data-aos="fade-right"
              style={{ width: "74%" }}
            >
              74%
            </div>
          </div>
          <h2 className="text-white text-center">Java</h2>

          <div
            class="progress mb-3 w-100"
            role="progressbar"
            aria-label="Warning example with label"
            aria-valuenow="63"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar text-bg-warning "
              data-aos="fade-right"
              style={{ width: "63%" }}
            >
              63%
            </div>
          </div>
          <h2 className="text-white text-center">MongoDB</h2>
          <div
            class="progress w-100 mb-3"
            role="progressbar"
            aria-label="Danger example with label"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-danger"
              data-aos="fade-right"
              style={{ width: "77%" }}
            >
              77%
            </div>
          </div>
          <h2 className="text-white text-center">Node Js</h2>
          <div
            class="progress w-100 mb-3"
            role="progressbar"
            aria-label="Secondary example with label"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-secondary"
              data-aos="fade-right"
              style={{ width: "77%" }}
            >
              77%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
