import React, { useState } from "react";
import "./css/Footer.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import app from "../firebase";

function Footer() {
  const [newslatter, setNewslatter] = useState(false);

  const handleSubmit = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    var seconds = parseInt(new Date().getTime() / 1000); // used for ID
    const subscriberEmail = document.getElementById("email-subscriber").value;
    app
      .database()
      .ref("/email/" + seconds)
      .set({
        userEmail: subscriberEmail,
        dateSubsribe: today,
      });
    setNewslatter(true);
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Aboneză-te și primești informații cu toate ofertele
        </p>
        <p className="footer-subscription-text">
          Poți anula abonamentul oricând.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              id="email-subscriber"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline" onClick={handleSubmit}>
              Subscribe
            </Button>
            {newslatter && (
              <p className="footer-subscription-text">Abonat cu succes</p>
            )}
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Despre noi</h2>
            <Link to="/sign-up">Cum functioneaza</Link>
            <Link to="/">Datasheets</Link>
            <Link to="/">Pe scurt</Link>
            <Link to="/">Circuit</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact</h2>
            <Link to="/">Contact us</Link>
            <Link to="/">Contact me</Link>
            <Link to="/">Galerie</Link>
            <Link to="/">Preturi</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Linkedinn</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              CNN SUNPWR
              <i className="fas fa-sun"></i>
            </Link>
          </div>
          <small className="website-rights">CNN © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
