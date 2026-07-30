import { Link } from "react-router-dom";
import HeroImage from "../assets/PortFolio.png"; 
import '../Styles/HomePage.css'
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

const HomePage = () => {
  return (
    <section className="home-page">

      <div className="hero-content">
        <div className="hero-text">

          <h1>
            Hi, I'm <span>Saurabh Kumar</span>
          </h1>

          <h2>Frontend Developer & React Enthusiast</h2>

          <p>
            I create modern, responsive, and user-friendly web applications
            using React, JavaScript, HTML, and CSS. Passionate about building
            clean UI, smooth user experiences, and high-performance websites.
          </p>

          <Link to="/clock" className="hero-btn">
            Explore My Apps
          </Link>
  

 <div class="Social-link">
    <ul>
        <li><a href="#"><i class="fa-brands fa-github"><FaFacebookF /> </i></a></li>
        <li><a href="#"><i class="fa-brands fa-linkedin">< FaInstagram /> </i></a></li>
        <li><a href="#"><i class="fa-brands fa-instagram"><FaGithub /></i></a></li>
        <li><a href="#"><i class="fa-brands fa-x-twitter"><FaEnvelope /> </i></a></li>
    </ul>
</div>
        </div>

     
        <div className="hero-image">

          <img src={HeroImage} alt="Profile" />

        </div>

      </div>

    </section>
  );
};

export default HomePage;