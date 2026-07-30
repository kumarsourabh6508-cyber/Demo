import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiGrid,
  FiFolder,
  FiCode,
  FiMail,
  FiMoon,
  FiSun,
  FiSearch,
} from "react-icons/fi";

const Navbar = ({ darkMode, toggleTheme }) => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <FiHome />,
    },
    {
      id: 2,
      name: "Apps",
      path: "/clock",
      icon: <FiGrid />,
    },
    {
      id: 3,
      name: "Projects",
      path: "/projects",
      icon: <FiFolder />,
    },
    {
      id: 4,
      name: "Skills",
      path: "/skills",
      icon: <FiCode />,
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
      icon: <FiMail />,
    },
  ];

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <h1>
         Max    <span>Portfolio</span>
        </h1>
      </div>

      <nav className="navbar-navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            <span className="navbar-link-icon">
              {item.icon}
            </span>

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <button className="btn1">
         SinUp
      </button>
    </header>
  );
};

export default Navbar;                          