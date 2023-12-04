import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <div className="footerComp">
        <FaLinkedin style={{ color: "white", fontSize: "254px" }} />

        <FaInstagram style={{ color: "white", fontSize: "254px" }} />

        <FaGithub style={{ color: "white", fontSize: "254px" }} />
      </div>
    </>
  );
}
