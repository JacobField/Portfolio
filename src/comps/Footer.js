import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

export function Footer() {
  return (
    <>
      <div className="footerComp" id="footerSection">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jacob-field-683122186/"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/lunar_light_code/"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jacobfield"
        >
          <FaGithub className="icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:jacobprogrammes@gmail.com"
        >
          <MdOutlineMailOutline className="icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="Jacob Field CV 2023 - 2024.pdf"
        >
          <IoMdPerson className="icon" />
        </a>
      </div>
    </>
  );
}
