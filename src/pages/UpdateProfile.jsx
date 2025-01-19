import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./css/Signup.css";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Validation
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Parolele nu se potrivesc");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history("/device");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <div className="sign-up-section">
        <div className="sign-up">
          <form onSubmit={handleSubmit} action="#">
            <h1 className="titlu">Actualizati profilul</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="adresa-de-mail">
              <h2>Adresa de email</h2>
              <input
                type="email"
                ref={emailRef}
                defaultValue={currentUser.email}
              />
            </div>

            <div className="sign-up-pass">
              <h2>Parola</h2>
              <input
                type="password"
                ref={passwordRef}
                placeholder="Gol pentru a mentine aceeasi"
              />
            </div>
            <div className="sign-up-pass">
              <h2>Confirma parola</h2>
              <input
                type="password"
                ref={passwordConfirmRef}
                placeholder="Gol pentru a mentine aceeasi"
              />
            </div>

            <div className="butoane">
              <div className="butonItem">
                <button
                  disabled={loading}
                  type="submit"
                  className="btn btn--outline btn--large"
                >
                  {" "}
                  UPDATE
                </button>
              </div>
            </div>
            <p className="auth-info">
              <Link to="/device">Anulare</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
