import "./index.css";
import { MovingComponent } from "react-moving-text";

const index = () => {
  return (
    <div>
      <div className="writeMeHeader">
        {" "}
        <MovingComponent
          type="typewriter"
          dataText={["You can write me easily with Email..."]}
        />{" "}
      </div>
      <div
        className="writeMe"
        onClick={(e) => {
          window.location.href = "mailto:aghamirzezade9@gmail.com";
        }}
      >
        Drop me an email{" "}
      </div>
    </div>
  );
};

export default index;
