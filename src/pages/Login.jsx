import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./css/Signup.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history("/device");
    } catch (e) {
      console.dir(e);
      setError("Intrarea in cont a esuat");
    }
    setLoading(false);
  }

  async function handleContDemo(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login("demo@demo.com", "parola123");
      history("/device");
    } catch {
      setError("Crearea contului a esuat");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="sign-up-section">
        <div className="sign-up">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/login-1.png?alt=media&token=66f6a82d-3011-4a1f-860c-80236481f11a"
            className="object"
            data-value="-3"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/login-2.png?alt=media&token=fa61b825-0104-4b7b-9d84-349be4e367ac"
            className="object"
            data-value="6"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/login-3.png?alt=media&token=ba5c522d-13b9-4bd5-8ae2-ec5b7330f97c"
            className="object"
            data-value="3"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/login-4.png?alt=media&token=01bbc5bc-8475-48bd-bac5-4b5ed0d75842"
            className="object"
            data-value="-6"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/login-5.png?alt=media&token=de531857-5e0d-4515-93ed-d10576e3e151"
            className="object"
            data-value="2"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/login-6.png?alt=media&token=7b731bea-fd51-4203-8331-143100e6d08d"
            className="object"
            data-value="-5"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/login-7.png?alt=media&token=75d52638-a565-40e6-b2eb-149c3c963c4b"
            className="object"
            data-value="-3"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/login-8.png?alt=media&token=add5bd7d-8b07-45ac-9dff-651c5f4ff82f"
            className="object"
            data-value="-2"
            alt=""
          />
          <form onSubmit={handleSubmit} action="#" className="formSignUp">
            <h1 className="titlu">Intra in cont</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="adresa-de-mail">
              <h2>Intra in cont</h2>
              <input type="email" ref={emailRef} placeholder="Email" required />
            </div>

            <div className="sign-up-pass">
              <h2>Parola</h2>
              <input
                type="password"
                ref={passwordRef}
                placeholder="Password"
                required
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
                  Log In
                </button>
              </div>
            </div>
            <p className="auth-info">
              <Link to="/forgot-password">Ai uitat parola?</Link>
            </p>
            <p className="auth-info">
              Nu ai un cont? <Link to="/sign-up">Inregistreaza-te</Link>
            </p>
          </form>
          <form onSubmit={handleContDemo} action="#" style={{ zIndex: 100 }}>
            <div className="butoane">
              <div className="butonItem">
                <button
                  disabled={false}
                  type="submit"
                  className="btn-signup btn--outline btn--large"
                >
                  CONT DEMO
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
