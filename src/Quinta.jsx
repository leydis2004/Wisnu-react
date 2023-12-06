import "./App.jsx";
import fondo from "/fondo-totall.png";
import comic from "/comic31.png";
import { useState } from "react";

const Quinta = (props)=> {
  const [contenidoParra, setContenidoParra]= useState(
    'Ember una neurona alegre y extrovertido que trabaja en la fábrica más importante de la ciudad de cerebrum,conviviendo en el interior del cerebro de un joven llamado nick, el cual le ocurre un accidente cerebrovascular por el descuido de su salud. Ocasionado que el hogar de ember se vean en peligro'
  );

  return (
    <>
      <section id="quinto" style={{ backgroundImage: `url(${fondo})` }}>
        <a id="Comic"></a>
        <div className="container">
          <div className="row rounded-4">
            <div className="col-12">
              <div className="titu-comic" style={{ textAlign: 'center' }}>
                <h1 className="text-info fw-bold">Comic</h1>
                <p className="text-body-secondary" style={{ fontSize: '19px' }}>
                  ¡Este es el comic que te ofrecemos!
                </p>
              </div>
            </div>
            <div className="col-md-5 col-md-6 col-lg-3 rounded-start-5 shadow"style={{backgroundColor: '#14bec7', textAlign: 'center', width: '475px'}}>
              <div className="sinop" style={{ marginTop: '97px' }}>
                <h2 className="text-light fw-bold">Sinopsis</h2>
                <p className="text-light" style={{ fontSize: '19px', width: '449px' }}>
                  {contenidoParra}
                </p>
                <div className="d-grid gap-2 d-md-block" style={{ width: '459px' }}>
                  <button className="btn shadow"  style={{backgroundColor: 'aquamarine', color: '#366c6f', textDecoration: 'none',}} type="button" onClick={()=> setContenidoParra('HOLA soy Ember, y te contare ¿que es una sinopsis?.sinopsis es un resumen general de una obra en particular.​ El término «sinopsis» procede del latín «synopsis», cuyos orígenes se remontan al griego antiguo y que etimológicamente significa visión de conjunto,​ de las raíces griegas')}>Ver informacion</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-6" style={{width: '693px'}}>
                     <a id="comic"></a>
                     <div className="information-content-2">
                       <img className="img-fluid" style={{width:'1269px'}} src={comic} alt="" ></img>
                       </div>
                        </div>
                </div>
              </div>
       </section>
    </>
  );
}

export default Quinta;
