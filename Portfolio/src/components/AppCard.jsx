import { Link } from "react-router-dom";

const AppCard = ({ title, description, path }) => {
  return (
    <article className="app-card">
      <h2>{title}</h2>
      <p>{description}</p>

      <Link to={path}>Open App</Link>
    </article>
  );
};

export default AppCard;