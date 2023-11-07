import { Navigation } from "./Components/Navigation";
import { Themes } from "./Components/Themes";
import ProfileBio from "./Components/ProfileBio";
import ProfilePostedRecipes from "./Components/ProfilePostedRecipes";
import './Components/Profile.css';
import GoBack from "../assets/arrow_back.svg" ;
import { Link } from "react-router-dom";



//created by Vivian
export const ProfilePage = () => {
  return (
    <div >
       
      <Navigation/>
      <Themes/>

      <div className="ProfileHeader">
        <Link to="/">
              <img src={GoBack} alt="Go to the previous page" className="back-btn" />
          </Link>
        <h1>Profile Page</h1>
      </div>
      
      <div>
        <ProfileBio />  
      </div>

      <div>
        <h3 className="ProfileHeaders2">Posted Recipes</h3>
        <div>
          <ProfilePostedRecipes/>
        </div>
      </div>
    </div>
    
  )
}
//calling ProfileBio and ProfilePostedRecipes Sections