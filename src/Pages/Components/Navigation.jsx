import "./navigation.css"
import { NavLink } from "react-router-dom"
import Home from "../../assets/Home.png"
import Create from "../../assets/Create.png"
import Saved from "../../assets/Saved.png"

export const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/">
        <img src={ Home } alt="Home link" />
      </NavLink>
      <NavLink to="/create">
        <img src={ Create } alt="Create a recipe" />
      </NavLink>
      <NavLink to="/saved">
        <img src={ Saved } alt="Saved recipes" />
      </NavLink>
    </nav>
  )
}
