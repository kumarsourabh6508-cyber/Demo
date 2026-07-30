import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiClock,
  FiCheckSquare,
  FiBell,
  FiGrid,
  FiX,
  FiCode,
  FiSettings,
} from "react-icons/fi";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const applicationLinks = [
    {
      id: 1,
      title: "Digital Clock",
      description: "Clock application",
      path: "/clock",
      icon: <FiClock />,
    },
    {
      id: 2,
      title: "Todo App",
      description: "Manage daily tasks",
      path: "/todo",
      icon: <FiCheckSquare />,
    },
    {
      id: 3,
      title: "Alarm",
      description: "Set your alarms",
      path: "/alarm",
      icon: <FiBell />,
    },
  ];

  return (
    <aside
      className={`sidebar ${
        sidebarOpen ? "sidebar-open" : ""
      }`}
    >
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="sidebar-brand-logo">Max</div>

          <div>
            <h2>My Portfolio</h2>
            <p>React Applications</p>
          </div>
        </div>

        <button
          type="button"
          className="sidebar-close-button"
          onClick={closeSidebar}
          aria-label="Close sidebar"
        >
          <FiX />
        </button>
      </div>

      <div className="sidebar-body">
        <p className="sidebar-section-title">
          Main Menu
        </p>

        <NavLink
          to="/"
          end
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <span className="sidebar-link-icon">
            <FiHome />
          </span>

          <div className="sidebar-link-content">
            <span>Home</span>
            <small>Portfolio overview</small>
          </div>
        </NavLink>

        <p className="sidebar-section-title applications-title">
          Applications
        </p>

        {applicationLinks.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            onClick={closeSidebar}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <span className="sidebar-link-icon">
              {item.icon}
            </span>

            <div className="sidebar-link-content">
              <span>{item.title}</span>
              <small>{item.description}</small>
            </div>
          </NavLink>
        ))}

        <p className="sidebar-section-title applications-title">
          Other
        </p>

        <NavLink
          to="/projects"
          onClick={closeSidebar}
          className="sidebar-link"
        >
          <span className="sidebar-link-icon">
            <FiGrid />
          </span>

          <div className="sidebar-link-content">
            <span>Projects</span>
            <small>View all projects</small>
          </div>
        </NavLink>

        <NavLink
          to="/skills"
          onClick={closeSidebar}
          className="sidebar-link"
        >
          <span className="sidebar-link-icon">
            <FiCode />
          </span>

          <div className="sidebar-link-content">
            <span>Skills</span>
            <small>My technologies</small>
          </div>
        </NavLink>

        <NavLink
          to="/settings"
          onClick={closeSidebar}
          className="sidebar-link"
        >
          <span className="sidebar-link-icon">
            <FiSettings />
          </span>

          <div className="sidebar-link-content">
            <span>Settings</span>
            <small>App preferences</small>
          </div>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;