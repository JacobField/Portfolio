import { descriptionTimeChecker } from "./descriptionTimeChecker";
import { about } from "./projectData";

export function About() {
  const dayColour = "rgba(252, 76, 2, 0.0)";
  const nightColour = "rgba(0, 0, 99, 0.0)";
  let divColour = descriptionTimeChecker(dayColour, nightColour);
  return (
    <>
      <h1 className="sectionTitle" id="aboutSection">
        About me
      </h1>
      <div className="aboutContainer" style={{ backgroundColor: divColour }}>
        <div className="aboutContent">{about}</div>
      </div>
    </>
  );
}
