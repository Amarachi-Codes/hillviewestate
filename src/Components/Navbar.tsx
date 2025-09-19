import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-4 mx-12">
      <div>
        <p>Hillview Estate</p>
      </div>
      <div>
        <ul className="flex gap-8">
            <li><NavLink to={"/register"}>Register</NavLink></li>
            <li><NavLink to={"/login"}>Log In</NavLink> </li>
            <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
            <li><NavLink to={"/news"}>News</NavLink> </li>
            <li><NavLink to={"/residents"}>Residents</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
