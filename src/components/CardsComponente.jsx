import React from "react";
import "./css/Cards.css";
import CardItem from "./CardItem";

function CardsComponente() {
  return (
    <div className="cards">
      <h1>Componenetele folosite</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1613400925541-8dd93bda6b91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
              text="Creierul proiectului, placuta Arduino WiFi R3 face ca acest proiect sa fie posibil."
              label="Arduino"
              path="/product"
            />
          </ul>
        </div>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1356&q=80"
              text="Panou solar de 5V cu putere de 1W perfect pentru prototipare."
              label="Solar Panel"
              path="/product"
            />
            <CardItem
              src="https://ardushop.ro/4801-large_default/kit-pan-tilt-pentru-servomotoare.jpg"
              text="Suportul special conceput pentru a fi utilizat pentru orientare pe doua axe."
              label="PanTilt"
              path="/product"
            />
            <CardItem
              src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/servo.jpg?alt=media&token=be3c1893-df5e-42b1-a37c-476c56ff70ba"
              text="Acest mini servo motor este proiectat special pentru aplicații de mica putere."
              label="Servomotoare"
              path="/product"
            />
            <CardItem
              src="https://hackster.imgix.net/uploads/attachments/527636/20180622_133548_YXDnbDMITj.jpg?auto=compress&w=1600&h=1200&fit=min&fm=jpg"
              text="Limiteaza sau nu intensitatea curentului electric in functie de luminozitate."
              label="Fotorezistor"
              path="/product"
            />
          </ul>
        </div>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/ina219.jpg?alt=media&token=22da0cb5-0d8d-44b4-84b7-80a95fa69930"
              text="Senzor bidirectional de curent si tensiunea."
              label="INA219"
              path="/product"
            />
            <CardItem
              src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/baterii.jpg?alt=media&token=36d19796-6ba0-4503-9564-536d7b970e0f"
              text="Acumulatoare reincarcabile de 3.7V."
              label="Baterii"
              path="/product"
            />
            <CardItem
              src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/lcd.jpg?alt=media&token=188770b2-9014-4af5-b829-e7a122beb2f9"
              text="Ecran pentru afisare cu 2 linii a cate 16 caractere"
              label="LCD"
              path="/product"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1602193435187-1fc23249c8f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80"
              text="Modul de incarcare solara a  baterilor Li-Ion"
              label="CN3065"
              path="/product"
            />

            <CardItem
              src="https://images.unsplash.com/photo-1597862624292-45748390b00e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              text="Convertor ridicator de tensiune"
              label="XL6009E1"
              path="/product"
            />
          </ul>
        </div>
      </div>
      <h1>Unelte hardware</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1614409938983-65f12e272ee4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
              text="Folosit in special in faza de proiectare."
              label="Breadboard"
              path="/product"
            />
            <CardItem
              src="https://images.pexels.com/photos/4398314/pexels-photo-4398314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              text="Prietenul meu de nadejde."
              label="Multimetru"
              path="/product"
            />
            <CardItem
              src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/jumpers.jpg?alt=media&token=2ee05636-3473-4dd8-b442-2ffb2f60c3bf"
              text="Fire temporare folosite in proiectare."
              label="Jumpers"
              path="/product"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1613500428955-0cd1c4313c40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              text="Placi pentru realizarea circuitelor finale."
              label="PCB"
              path="/product"
            />
            <CardItem
              src="https://images.pexels.com/photos/2628105/pexels-photo-2628105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              text="Soldering iron, hot air and glue gun."
              label="Hot Stuff"
              path="/product"
            />
          </ul>
        </div>
      </div>
      <h1>Unelte software</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1553063085-dbbf64d936ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
              text="Limbaj Arduino folosit pe Arduino Uno si NodeMCU."
              label="ArduinoIDE"
              path="/product"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              text="Biblioteca principal folosit pentru website."
              label="React"
              path="/product"
            />
            <CardItem
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90be1cbc-59fb-4d85-9ba0-2d1a6fe32fd7/db8gw2e-b8014897-8991-4b22-b73f-3b1e53162581.png/v1/fill/w_1024,h_576,q_80,strp/javascript_wallpaper_by_mrhudson_db8gw2e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC85MGJlMWNiYy01OWZiLTRkODUtOWJhMC0yZDFhNmZlMzJmZDdcL2RiOGd3MmUtYjgwMTQ4OTctODk5MS00YjIyLWI3M2YtM2IxZTUzMTYyNTgxLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fbVTlzKZTSzFfhw9T10duccfHAd9qpKtnNAKRbHSvkA"
              text="Motorul principal al website-ului."
              label="JavaScript"
              path="/product"
            />
            <CardItem
              src="https://i.redd.it/st2ltbdupjo51.png"
              text="Realizeaza partea de beauty."
              label="CSS"
              path="/product"
            />
          </ul>
        </div>
      </div>
      <h1>Puncte de lucru</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://www.utcluj.ro/media/faculties/5/electronica-telecomunicatii-si-tehnologia-informatiei.jpg.1280x720_q85_crop-smart.jpg"
              text="Universitatea Tehnica din Cluj-Napoca"
              label="UTCN"
              path="/product"
            />
            <CardItem
              src="https://ultratech.ro/wp-content/uploads/2018/09/IMG_0521-copy-768x396.jpg"
              text="Locul de munca aflat in Cluj-Napoca"
              label="UltraTech"
              path="/product"
            />
            <CardItem
              src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/camin.jpg?alt=media&token=079fb51e-97d8-48bf-b22e-fa25b714f863"
              text="Campusul Studentesc Observator"
              label="Camin V"
              path="/product"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsComponente;
