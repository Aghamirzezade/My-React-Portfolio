import { MovingComponent } from "react-moving-text";
import './index.css'

const index = () => {
  return (
    <div className="aboutContentText">
        <MovingComponent
          type="typewriter"
          dataText={["I am excited for Junior Front End Developer position. I believe my skills and experience make me the perfect candidate for this role. I have been freelancing as a web developer for the past year.During this time I gained experience in both React and Redux.I feel ready for strong and exciting team or freelance work."]}
        />
    </div>
  )
}
export default index