import React from "react";
import "./css/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Descopera mai multe despre noi!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/20210331_230102.jpg?alt=media&token=6255914f-68eb-43e8-adb8-1a98255b8c49"
              text="Creează un cont și devino verde!"
              label="Inregistrează-te"
              path="/sign-up"
            />
            <CardItem
              src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/20210527_163725.jpg?alt=media&token=8001c8a9-8765-42c1-a2c4-71f6597c036d"
              text="Specifiicatii detaliate pentru ingineri si pasionati"
              label="Tehnic"
              path="/tehnic"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1584276433286-8e64bebdc502?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1115&q=80"
              text="Descopera serviciile oferite de echipa noastra"
              label="Servicii"
              path="/services"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1558693836-83d8cf52c2ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              text="Galerie foto cu produsul nostru"
              label="Galerie"
              path="/galerie"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1620550118305-83abd83e9b05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              text="Omul din spatele proiectului. Viitorul inginer si viata lui"
              label="Creator"
              path="/creator"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
