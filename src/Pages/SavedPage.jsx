import { Navigation } from "./Components/Navigation"
import { NavLink } from "react-router-dom"

export const SavedPage = () => {
  return (
    <div>
      <Navigation/>
      <div className="general_margin">
        <h1>Saved Recipes</h1>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </div>
  )
}
