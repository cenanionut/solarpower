import React, { useEffect } from "react";
import CardsComponente from "../components/CardsComponente";
import "./css/Tehnic.css";

function Tehnic() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tehnic-section">
      <div className="tehnic-general">
        <div className="img__wrapper">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/datasheet.jpg?alt=media&token=26a131aa-1c36-41ea-a95f-18098794b5cd"
            alt=""
          />
          <div className="img-description" id="img-description-mobile-1">
            Datasheet
          </div>
        </div>
        <div className="img__wrapper">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/circuit.jpg?alt=media&token=bf9f9931-67b4-4d2e-9f35-cc2ca6663f95"
            alt=""
          />
          <div className="img-description" id="img-description-mobile-2">
            Circuit
          </div>
        </div>
        <div className="img__wrapper">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/uno.jpg?alt=media&token=a546a4ef-2694-4d0c-ada8-1d88fe7ea9c3"
            alt=""
          />
          <div className="img-description" id="img-description-mobile-3">
            Pe scurt
          </div>
        </div>
      </div>
      <CardsComponente />
    </div>
  );
}

export default Tehnic;
