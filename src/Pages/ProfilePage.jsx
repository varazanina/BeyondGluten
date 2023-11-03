import { NavLink } from "react-router-dom"
import { Navigation } from "./Components/Navigation"
import { Themes } from "./Components/Themes"
import ProfileBio from "./Components/ProfileBio"
import ProfilePostedRecipes from "./Components/ProfilePostedRecipes"


export const ProfilePage = () => {
  return (
    <div>
      <Navigation/>
      <Themes/>
      <h1>Profile Page</h1>
      <div>
        <ProfileBio 
        />
      </div>
      <div>
        <h3>Posted Recipes</h3>
        <div>
        <ProfilePostedRecipes/>
        </div>
        
      </div>
      <div>
        
      </div>
    </div>
    
  )
}
