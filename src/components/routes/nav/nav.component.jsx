import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import "./nav.style.scss";

function Nav() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign-in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Nav;
