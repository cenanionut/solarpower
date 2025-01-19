import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ContactUs.css";
import Button from "./Button";
import app from "../firebase";
import "./css/Contactme.css";

function ContactUs() {
  const [errorSend, setErrorSend] = useState("");
  const [success, setSuccess] = useState("");
  const nameRef = useRef();
  const locationRef = useRef();
  const phoneRef = useRef();
  const subjectRef = useRef();
  const msgRef = useRef();
  const history = useNavigate();

  const handleSubmit = () => {
    var seconds = parseInt(new Date().getTime() / 1000); // used for ID
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    app
      .database()
      .ref("/contactus/" + seconds)
      .set(
        {
          name: nameRef.current.value,
          location: locationRef.current.value,
          phone: phoneRef.current.value,
          subject: subjectRef.current.value,
          msg: msgRef.current.value,
          data: today,
        },
        (error) => {
          if (error) {
            setErrorSend("Eroare de trimitere!");
            setSuccess("");
          } else {
            setErrorSend("");
            setSuccess("Mesaj trimis cu succes!");
          }
        }
      );

    nameRef.current.value = "";
    locationRef.current.value = "";
    phoneRef.current.value = "";
    subjectRef.current.value = "";
    msgRef.current.value = "";

    history.push("/device");
  };

  return (
    <div className="contactus-section">
      <h1>Contact Us</h1>

      <div className="wrapper-contact">
        <div className="left-side-contactus">
          <h2>Nu te pierde in detalii, o sa le stabilim telefonic.</h2>
          <h3>Daca nu iti plac formularele ne poti trimite un mail.</h3>
          <img src="./imgs/world_map.png" alt="" />
        </div>
        <div className="right-side-contactus">
          <div className="info-error-succes">
            {errorSend && <div className="alert alert-danger">{errorSend}</div>}
            {success && <div className="alert alert-success">{success}</div>}
          </div>
          <div className="name-adress">
            <input type="text" placeholder="Nume" ref={nameRef} required />
            <input
              type="text"
              placeholder="Localitate"
              ref={locationRef}
              required
            />
          </div>
          <div className="telefon-contactus">
            <input type="text" placeholder="Telefon" ref={phoneRef} required />
          </div>
          <div className="subject">
            <input
              type="text"
              placeholder="Comanda/Solicitare serviciu/Altele"
              ref={subjectRef}
              required
            />
          </div>
          <div className="message">
            <input
              type="text"
              placeholder="Mesaj / Generalizat"
              id="mesaj"
              ref={msgRef}
              required
            />
          </div>
          <div className="buton_aboutme">
            <Button
              className="btns"
              buttonStyle="btn--outline--dark"
              buttonSize="btn--large"
              onClick={handleSubmit}
            >
              Trimite
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
