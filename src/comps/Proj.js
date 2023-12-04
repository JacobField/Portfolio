import { timeChecker2 } from "./timeChecker2";

export function Proj({ name, descrip, video, link }) {
  const dayColour = "rgba(252, 76, 2, 0.5)";
  const nightColour = "rgba(0, 0, 99, 0.5)";
  let divColour = timeChecker2(dayColour, nightColour);

  return (
    <>
      {/* Give projectGrid grid display 3 columns*/}
      {/* Title should display above video */}
      {/* Either link to be seperate or embedded into proj name */}
      <div className="nameDisplay" style={{ fontSize: "24px" }}>
        <a className="anchor" href={link}>
          {name}
        </a>
      </div>
      <div className="projectGrid">
        {/* Change video display to actually be a video */}
        <div className="videoDisplay">
          <video className="video" width="70%" height="auto" controls>
            <source
              src={`${process.env.PUBLIC_URL}/${video}`}
              type="video/mp4"
            />
          </video>
        </div>
        {/* Description to be displayed to the right of video */}
        <div className="descripDisplay" style={{ backgroundColor: divColour }}>
          {descrip}
        </div>
      </div>
    </>
  );
}
