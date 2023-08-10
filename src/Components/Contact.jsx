import React, { useEffect } from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Styles.css";
import aos from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  useEffect(() => {
    aos.init({ duration: 2500 });
  });
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zkiwu2d",
        "template_29qxk9m",
        form.current,
        "o4YF2CaFE2myEiwqx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setDone(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div
        className="card  bg-dark container mt-5 text-white align-items-center"
        data-aos="fade-up"
      >
        <div class="mb-3 w-75">
          <label for="name" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            name="first_name"
            id="name"
            required
          />
        </div>
        <div class="mb-3 w-75">
          <label for="name" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            name="last_name"
            id="name"
            required
          />
        </div>
        <div class="mb-3 w-75">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            required
          />
        </div>
        <div class="mb-3 w-75">
          <label for="message" class="form-label">
            Message
          </label>
          <textarea
            class="form-control"
            id="message"
            name="message"
            rows="3"
            required
          ></textarea>
        </div>

        <button className="btn btn-primary w-25 align-items-center mb-3">
          Submit
        </button>
        <div>{done && <h1>Thank You</h1>}</div>
      </div>
    </form>
  );
};

export default Contact;
