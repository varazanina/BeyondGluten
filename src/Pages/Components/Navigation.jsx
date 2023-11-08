import "./navigation.css"
import { NavLink, useLocation } from "react-router-dom"
import Home from "../../assets/Home.svg"
import Create from "../../assets/Create.svg"
import Saved from "../../assets/Saved.svg"
import HoverHome from "../../assets/hoverHome.svg"
import HoverSaved from "../../assets/hoverSaved.svg"

export const Navigation = () => {

  // By Nina

  const location = useLocation();

  return (
    <nav className="navigation">
      <NavLink to="/">
        {/* Displaying highlighted icons when the location matches the path of the icon
        it is made by classes and useLocation */}
        <img className={`icon ${location.pathname === '/' ? 'hidden' : ''}`} src={ Home } alt="Home link" />
        <img className={`filledIcon ${location.pathname === '/' ? 'displayed' : ''}`} src={ HoverHome } alt="Home link" />
      </NavLink>
      <NavLink to="/create">
        <img src={ Create } alt="Create a recipe" />
      </NavLink>
      <NavLink to="/saved">
        <img className={`icon ${location.pathname === '/saved' ? 'hidden' : ''}`} src={ Saved } alt="Saved recipes" />
        <img className={`filledIcon ${location.pathname === '/saved' ? 'displayed' : ''}`} src={ HoverSaved } alt="Saved recipes" />
      </NavLink>
    </nav>
  )
}
