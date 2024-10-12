import React from "react";
import { NavLink } from "react-router-dom";
import FooterSocials from "./FooterSocials";
import ResetLocation from "../../helpers/ResetLocation";

export default class FooterMenu extends React.Component {
  render() {
    return (
      <ul className="footer-menu  flex-container flex-column">
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "#ff6240",
                  }
                : {}
            }
            onClick={ResetLocation}
            className="txt-white"
            to="/menu"
          >
            Menü
          </NavLink>
        </li>

        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "#ff6240",
                  }
                : {}
            }
            onClick={ResetLocation}
            className="txt-white"
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "#ff6240",
                  }
                : {}
            }
            onClick={ResetLocation}
            className="txt-white"
            to="/about"
          >
            Hakkında
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "#ff6240",
                  }
                : {}
            }
            onClick={ResetLocation}
            className="txt-white"
            to="/contact"
          >
            İletişim
          </NavLink>
        </li>
        <li>
          <FooterSocials />
        </li>
      </ul>
    );
  }
}
