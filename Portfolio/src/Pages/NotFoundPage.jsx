import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <h1>404</h1>
      <p>Page not found.</p>

      <Link to="/">Go to Home</Link>
    </section>
  );
};

export default NotFoundPage;