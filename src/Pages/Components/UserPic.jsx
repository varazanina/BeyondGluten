import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <div>
      <NavLink to="/profile">
      <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1743&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Picture" className="UserPic" ></img>
      </NavLink>
      
    </div>
  )
}