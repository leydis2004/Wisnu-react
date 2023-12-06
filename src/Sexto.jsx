import "./App.jsx";
import fondo from "/fondo-totall.png";
import leydis from "/dary1.png";

function Sexto() {
  return (
    <>
      <section id="sexto" style={{ backgroundImage: `url(${fondo})` }}>
        <a id="Creador"></a>
        <div className="container rounded-5" style={{ backgroundColor: '#f1f1f1', marginTop: '81px' }}>
          <div className="row">
            <div className="col-12 shadow rounded-5">
              <div>
                <h1 className="text-info fw-bold" style={{ textAlign: 'center' }}>Creadora</h1>
                <p className="text-body-secondary" style={{ textAlign: 'center', fontSize: '19px' }}>¡Aprendiz de realizacion!</p>
              </div>
              <div className="card mb-3 mx-auto" style={{ maxWidth: '1000px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img className="img-fluid rounded-start" src={leydis} alt=""></img>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title" style={{textAlign: 'center', fontSize: '30px', color: '#14bec7'}}>Leydis Correa</h5>
                      <p className="text-body-secondary" style={{ textAlign: 'center', fontSize: '19px' }}>@leydiscorrea38</p>
                      <p className="card-text" style={{ fontSize: '20px' }}>
                        Es una persona amable, muy paciente, convivo con una
                        familia grande que siempre está rodeada de risas y
                        juegos. En este momento estoy en el tercer trimestre de
                        produccion multimedia y deseo poner en práctica todos
                        mis conocimientos.
                      </p>

                      <a href="https://www.instagram.com/" className="btn btn-primary">Ver perfil</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sexto;
