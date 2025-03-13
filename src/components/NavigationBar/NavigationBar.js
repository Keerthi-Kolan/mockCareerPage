import LeftComponent from "../LeftComponent/LeftComponent";
import RightComponent from "../RightComponent/RightComponent";
import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    <div className="navbar">
      <LeftComponent />
      <RightComponent />
    </div>
  );
};
export default NavigationBar;
