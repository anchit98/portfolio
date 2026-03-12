import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:jobsforanchit.boruah@gmail.com" data-cursor="disable">
                jobsforanchit.boruah@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>BTech in Petroleum Engineering with specialization in Gas</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/anchit98"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/anchitboruah/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/anchitboruah/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Anchit Boruah</span>
            </h2>
            <h5>
              <MdCopyright/>2026 All Rights Reserved
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
