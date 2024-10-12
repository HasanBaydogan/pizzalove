import React from "react";
import { NavLink } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

export default class FooterLegal extends React.Component {
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
            to="/careers"
          >
            Kariyer
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
            to="/privacy"
          >
            Gizlilik Politikası
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
            to="/refunds"
          >
            İade ve Değişim
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
            to="/terms"
          >
            Kullanım Şartları
          </NavLink>
        </li>
      </ul>
    );
  }
}
