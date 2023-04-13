import introVideo from "./videos/my-header-video.mp4";
import introVideoFirst from "./videos/my-second-video.mp4";
import introVideoSecond from "./videos/my-third-video.mp4";
import introVideoFourth from "./videos/my-fourth-video.mp4";
import {MovingComponent} from 'react-moving-text'
import "./index.css";

const index = () => {
  return (
    <>
      <div className="myVideos">
        <div>
          <video muted autoPlay src={introVideo} />
          <video muted autoPlay src={introVideoFirst} />
        </div>
        <div>
          <video muted autoPlay src={introVideoSecond} />
          <video muted autoPlay src={introVideoFourth} />
        </div>
        <div className="contentText">
          <MovingComponent
            type="typewriter"
            dataText={["The developing world requires developers..."]}
          />{" "}
        </div>
      </div>
    </>
  );
};

export default index;
