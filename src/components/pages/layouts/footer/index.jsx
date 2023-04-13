import "./index.css";
import moment from "moment";

const Footer = () => {
  return (
    <div className="footerEnd">
      <div className="location">
        <div className="adress">Baku ,Azerbaijan</div>
        <div className="date">{moment().format("DD-MM-YYYY")}</div>
      </div>
      <div className="footerContact">
        <ul>
          <li>
            {" "}
            <a href="" target="_blank">Twitter</a>
          </li>
          <li>
            {" "}
            <a href="" target="_blank">LinkedIn</a>
          </li>
          <li>
            {" "}
            <a href="" target="_blank">GitHub</a>
          </li>
          <li>
            {" "}
            <a href="">Whatsapp</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
