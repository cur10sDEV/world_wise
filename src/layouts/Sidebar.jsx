import { Logo } from "../components";
import { Places } from "../components/Places";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col justify-start px-16 items-center relative">
      <NavLink to="/">
        <Logo styles="mb-10" />
      </NavLink>
      <Places />
      <footer className="text-gray-400 absolute bottom-0">
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </footer>
    </div>
  );
};
export default Sidebar;
