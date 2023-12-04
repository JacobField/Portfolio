import { descriptionTimeChecker } from "./descriptionTimeChecker";
import { about } from "./projectData";

export function About() {
  const dayColour = "rgba(252, 76, 2, 0.6)";
  const nightColour = "rgba(0, 0, 99, 0.4)";
  let divColour = descriptionTimeChecker(dayColour, nightColour);
  return (
    <div className="aboutContainer" style={{ backgroundColor: divColour }}>
      <div className="aboutContent">{about}</div>
    </div>
  );
}
