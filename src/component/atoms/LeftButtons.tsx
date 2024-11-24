import React, { memo } from "react";
import './LeftButtons.css';
import { useNavigate } from "react-router-dom";
interface ILeftButtonsProps {
  iconType: 'Home' | 'Search' | 'Notifications' | 'Messages'|'Profile'|'List'|'Locations'|'More';
  name: string;
  path: string;
  isActive?: boolean;

}

function LeftButtons(props: ILeftButtonsProps) {
  const navigate =  useNavigate ();
  const { iconType, name, path, isActive } = props;

  const goToPath = () => { navigate(path); };
  const icons = () => {
    switch (iconType) {
      case "Home": return <i className="fa-solid fa-house" style={{color: '#1da1f2'}}></i>
      case "Search": return <i className="fa-solid fa-magnifying-glass" style={{color: '#1da1f2'}}></i>
      case "Notifications": return <i className="fa-solid fa-bell" style={{color: '#1da1f2'}}></i>
      case "Profile": return <i className="fa-solid fa-user" style={{color: '#1da1f2'}}></i>
      case "Messages": return <i className="fa-solid fa-message" style={{color: '#1da1f2'}}></i>
      case "List": return <i className="fa-solid fa-list" style={{color: '#1da1f2'}}></i>
      case "Locations": return <i className="fa-solid fa-location-dot" style={{color: '#1da1f2'}}></i>
      case "More": return <i className="fa-solid fa-ellipsis" style={{color: '#1da1f2'}}></i>
      default: return <></>;
    }
  };

  const getStyleName = ()=>{
    return isActive ?  {fontWeight: 'bold', color: 'white'} :  {color:'white'}
 } 
  return (
    <div onClick={goToPath} className="row x-btn-hover align-items-center">
      <div className="col-2">
        {
          icons()
        }
      
      </div>

      <div className="col-10">
        <span style={getStyleName()}>{name}</span>
      </div>
    </div>
  );
}

export default memo(LeftButtons); // LeftButtons;
