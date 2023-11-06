import { Navigation } from "./Components/Navigation"
import { NavLink } from "react-router-dom"
import UserPic from "./Components/UserPic"

export const SavedPage = () => {
  return (
    <div>
      <Navigation/>
      <h1>Saved Recipes</h1>
      <NavLink to="/profile">Profile</NavLink>
      
    </div>
  )
}
