import { NavLink } from "react-router-dom"
import { Navigation } from "./Components/Navigation";
import { Themes } from "./Components/Themes";
import ProfileBio from "./Components/ProfileBio";
import ProfilePostedRecipes from "./Components/ProfilePostedRecipes";
import './Components/Profile.css';

//created by Vivian
export const ProfilePage = () => {
  return (
    <div >
      <Navigation/>
      <Themes/>
      <h1>Profile Page</h1>
      <div>
        <ProfileBio />  
      </div>
      <div>
        <h3 className="ProfileHeaders2">Posted Recipes</h3>
        <div>
         <ProfilePostedRecipes/>
        </div>
        
      </div>
      <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      </div>
      
    </div>
    
  )
}
//calling ProfileBio and ProfilePostedRecipes Sections