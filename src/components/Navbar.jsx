import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { Logo } from "./";

const Navbar = () => {
  return (
    <nav>
      <div className="logo flex justify-between items-center">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <ul className="navlink flex justify-between items-center">
          <li className="mx-6 text-xl">
            <NavLink to="/product">PRODUCT</NavLink>
          </li>
          <li className="mx-6 text-xl">
            <NavLink to="/pricing">PRICING</NavLink>
          </li>
          <li className="mx-6 text-xl">
            <NavLink to="/login">
              <Button>LOG IN</Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
