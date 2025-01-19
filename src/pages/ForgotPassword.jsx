import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./css/Signup.css";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Verifica inbox-ul pentru instructiuni");
    } catch {
      setError("Resetarea parolei esuata");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="sign-up-section">
        <div className="sign-up">
          <form onSubmit={handleSubmit} action="#">
            <h1 className="titlu">Resetare parola</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            {message && <div className="alert alert-success ">{message}</div>}
            <div className="adresa-de-mail">
              <h2>Intra in cont</h2>
              <input type="email" ref={emailRef} placeholder="Email" />
            </div>

            <div className="butoane">
              <div className="butonItem">
                <button
                  disabled={loading}
                  type="submit"
                  className="btn btn--outline btn--large"
                >
                  {" "}
                  Reset Parola
                </button>
              </div>
            </div>
            <p className="auth-info">
              <Link to="/log-in">Inapoi la login</Link>
            </p>
            <p className="auth-info">
              Nu ai un cont? <Link to="/sign-up">Inregistreaza-te</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
