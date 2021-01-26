import "./IconButton.css";

const IconButton = ({ icon, className }) => (
  <button className={["icon-button", className].filter((x) => x).join(" ")}>
    <span className={icon}></span>
  </button>
);

export default IconButton;
