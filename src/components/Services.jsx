import React, { useEffect } from "react";
import CardServicii from "../CardServicii";
import CardServiciuSt from "../CardServiciuSt";
import CardServiciuDr from "../CardServiciuDr";

import "../../App";
import "./Services.css";

export default function Services() {
  const descrResidential = [
    "Solutie completa pentru locuita ",
    "Revizie lunara ",
    "Asistenta online ",
  ];

  const descrComercial = [
    "Aducem proiectul nostru in afacearea ta",
    "Vizite saptamanale",
    "Asistenta telefonica",
  ];

  const descrAgricultura = [
    "Devino un fermier smart",
    "Ferma de energie",
    "Suport 24/7",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services">
      <h1>Pachete de servicii </h1>
      <div className="cards_servicii">
        <div className="cards_servicii_wrapper">
          <ul className="cards_items_servicii">
            {/* În acest exemplu indicativ considerăm o configuraţie la un preţ
            mediu estimat de 1.100 euro per KW instalat, aproximativ 4.600 de
            lei. */}
            <CardServicii
              src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/house.png?alt=media&token=baa0c2d9-daf4-4596-9e59-dad1cc5b38be"
              titlu="Residential Area"
              nr={1}
              cost="8"
              descr={descrResidential}
            />
            <CardServicii
              src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/comercial.png?alt=media&token=6ca7df98-8985-47c4-9254-bbb5730c67a6"
              titlu="Commercial Area"
              nr={2}
              cost="6.99"
              descr={descrComercial}
            />
            <CardServicii
              src="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/agricultura.png?alt=media&token=4a260afb-3131-4bc4-9a2a-16443064af3a"
              titlu="Agricultral Area"
              nr={3}
              cost="9"
              descr={descrAgricultura}
            />
          </ul>
          <h5>* preturile sunt in functie echipamentul in Watt instalat.</h5>
        </div>
      </div>
      <h1>Servicii</h1>
      <div className="cards_serviciu">
        <div className="card_wrapper_serviciu">
          <ul className="cards_items_serviciu">
            <CardServiciuSt
              poza="https://images.unsplash.com/photo-1440940627368-bd68a386bb73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
              icon="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/instalare.png?alt=media&token=fe429bb0-61ac-4f6e-ba32-af4382f6d5db"
              title="Instalare Panou Solar"
              subtitle="CEA MAI PROFESIONISTA ECHIPA"
              descr="Vi se va oferi o oferta personalizata in functie de nevoile dumneavoastra. Totul se executa rapid si profesionist, curat si eficient."
            />
            <CardServiciuDr 
              poza="https://images.unsplash.com/photo-1447433865958-f402f562b843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
              icon="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/maintenance.png?alt=media&token=af64e6e7-5a1b-4a0e-99ab-e539fe1c4fb2"
              title="Mentenanta Preventiva"
              subtitle="ASIGURAM O FUNCTIONARE EFICIENTA"
              descr="O echipa profesionista va efectua o vizita pe teren si va masura si verifica cu atentie ca panourile si intregul sistem sa functioneze in randament maxim."
            />
            <CardServiciuSt
              poza="https://images.unsplash.com/photo-1592833159091-10e59577d32f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              icon="https://firebasestorage.googleapis.com/v0/b/cnn-solar-power.appspot.com/o/reparatie.png?alt=media&token=b8eb3420-9872-403c-8702-033f4f4937fb"
              title="Reparatie Sistem"
              subtitle="INTERVENIM PROMPT CU CEA MAI COMPETENTA ECHIPA"
              descr="Nu dorim in nici un moment sa se ajunga la aceasta situatie si dorim sa remediem imediat situatia."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
