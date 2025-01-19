import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./css/Device.css";
// import "typeface-ibm-plex-sans";
import DataInfoItem from "../components/DataInfoItem";

export default function Device() {
  const [voltage] = useState(Math.floor(Math.random() * 21 + 20));
  const [current] = useState(Math.floor(Math.random() * 6 + 5));
  const [power, setPower] = useState([]);
  const [energy, setEnergy] = useState([]);

  const [error] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    // var starCountRef = app.database().ref("/");
    // starCountRef.on("value", (snapshot) => {
    //   const refData = snapshot.val();
    //   setVoltage(refData.Voltage);
    //   setCurrent(refData.Current);
    //   setPower(refData.Power);
    //   setEnergy(refData.Energy);
    // });
    // return () => {};
    setPower(voltage * current);
    setEnergy(voltage * current * 5);
  }, [voltage, current]);

  return (
    <div className="device-section">
      <div className="container-device">
        <div className="titlu-device">
          {error && <div className="alert alert-danger">{error}</div>}
          <h3>
            <i class="fas fa-street-view"></i> Profil utilizator
          </h3>
        </div>
        <div className="email-and-update">
          <h3>
            {" "}
            <strong>Email: </strong> {currentUser.email}
          </h3>
          {currentUser.email !== "demo@demo.com" && (
            <div className="update-profile">
              <Link to="update-profile" className="btn btn--outline btn--large">
                Update profile
              </Link>
            </div>
          )}
        </div>

        <div className="device-carac">
          <div className="wrapper-data-info">
            <DataInfoItem
              img="https://cdn2.iconfinder.com/data/icons/electricity-colored-outline/64/b_1-512.png"
              info="Voltage"
              number={voltage}
              unit="V"
            />
            <DataInfoItem
              img="https://cdn2.iconfinder.com/data/icons/electricity-colored-outline/64/b_8-512.png"
              info="Current"
              number={current}
              unit="A"
            />
            <DataInfoItem
              img="https://cdn2.iconfinder.com/data/icons/electricity-colored-outline/64/b_9-512.png"
              info="Power"
              number={power}
              unit="W"
            />
            <DataInfoItem
              img="https://cdn2.iconfinder.com/data/icons/electricity-colored-outline/64/b_4-512.png"
              info="Energy/5h"
              number={energy}
              unit="Wh"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
