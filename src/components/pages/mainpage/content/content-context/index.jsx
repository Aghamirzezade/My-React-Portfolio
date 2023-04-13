import React from "react";
import "./index.css";
import { MovingComponent } from "react-moving-text";
import { useState } from "react";

const Index = () => {
  //MY PHOTO CONTENT HOVER...
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const styleHover = {
    display: isHover ? "inline" : "none",
  };

  //BACKGROUND CONTENT HOVER...
  const [isBackgroundHover, setBackgroundHover] = useState(false);
  const handleFrontMouseEnter = () => {
    setBackgroundHover(true);
  };
  const handleFrontMouseLeave = () => {
    setBackgroundHover(false);
  };
  const styleMain = {
    backgroundImage: isBackgroundHover
      ? "url(" +
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6b4a5a6-b6b1-404b-adec-4278974b028f/dajwnel-94ce2e8b-08a5-47cf-9a15-e9cc96a7bab5.png/v1/fill/w_1231,h_649,q_70,strp/4k_flat_ui_developer_desktop_background__php__by_devleaf_dajwnel-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE2MCIsInBhdGgiOiJcL2ZcL2Q2YjRhNWE2LWI2YjEtNDA0Yi1hZGVjLTQyNzg5NzRiMDI4ZlwvZGFqd25lbC05NGNlMmU4Yi0wOGE1LTQ3Y2YtOWExNS1lOWNjOTZhN2JhYjUucG5nIiwid2lkdGgiOiI8PTQwOTYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9Pmhocjjq5X-J51JmmYJ1T7KMAwALsLJexq6LEO_2hM" +
        ")"
      : "none",
    backgroundPosition: isBackgroundHover ? "center" : "none",
    backgroundSize: isBackgroundHover ? "cover" : "none",
    backgroundRepeat: isBackgroundHover ? "no-repeat" : "none",
    color: isBackgroundHover ? "rgba(255, 255, 255 , 0)" : 'rgba(0 , 0 , 0 )'
  };

  const styleMainHead = {
    backgroundColor : isBackgroundHover ? "transparent" : 'chocolate'
  }
  return (
    <div className="main" style={styleMain}>
      <div>
        <p
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="mainHead"
          style={styleMainHead}
        >
          {" "}
          ~SINCE 2021~
        </p>
        <br />
        <br />
        <p style={styleHover} className="mainHeadPop">
          I used Only My Computer and Udemy courses
        </p>
      </div>



      <div className="mainText">
        I am <p className="myNameText">Agha</p> <img className="myPho" src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="My Photo"/>
        ,
        <p onMouseEnter={handleFrontMouseEnter}
          onMouseLeave={handleFrontMouseLeave}
          className="myJobText">
          a junior frontend developer </p>
        with Javascript & React. I can proudly say that I enjoy my job.I am
        ready to join an exciting and strong team.
      </div>




      <div className="mainFooter">
        <MovingComponent
          type="typewriter"
          dataText={["WELCOME TO MY FIRST PORTFOLIO..."]}
        />{" "}
      </div>
    </div>
  );
};

export default Index;
