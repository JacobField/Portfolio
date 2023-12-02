import { projectData } from "./projectData";
import { Proj } from "./Proj";
// Project component to map through projData to dynamically display each proj
export function Projects() {
  return (
    <div className="projectsDiv">
      {projectData.map((eachProject) => {
        return (
          <Proj
            key={eachProject.id}
            name={eachProject.name}
            link={eachProject.link}
            video={eachProject.video}
            descrip={eachProject.description}
          ></Proj>
        );
      })}
    </div>
  );
}
