import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiPlaywright } from "react-icons/si";
import { SiVitest } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { TbFileTypeCss } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
export function TechStack() {
  return (
    <div className="teckStack">
      <IoLogoJavascript className="icon" />
      <TbBrandTypescript className="icon" />
      <FaReact className="icon" />
      <TbBrandNextjs className="icon" />
      <FaHtml5 className="icon" />
      <TbFileTypeCss className="icon" />
      <BsFiletypeSql className="icon" />
      <SiExpress className="icon" />
      <IoLogoNodejs className="icon" />
      <FaGithub className="icon" />
      <SiPlaywright className="icon" />
      <SiVitest className="icon" />
    </div>
  );
}
