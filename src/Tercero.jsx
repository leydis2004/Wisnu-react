import "./App.jsx";
import fondo1 from '/fondo-totall.png'
import hemi from '/hemiplejia121.jpg'
import izque from '/isquemica.jpg'
import hemo from '/hemorragica1.jpg'
function Tercero(props) {
  return (
    <>
      <section id="tercero" style={{ backgroundImage: `url(${fondo1})` }}>
        <a id="informacion"></a>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <div className=" mt-5" style={{ textAlign: 'center' }}>
                  <h1 className="text-info fw-bold mt-5">{props.texto}</h1>
                  <p className="text-body-secondary" style={{ fontSize: '19PX' }}>!Datos de interes!
                  </p>
                </div>
                <div id="carouselExampleDark" className="carousel carousel-dark slide shadow rounded-5">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"   className="active"   aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark"  data-bs-slide-to="1"
                      aria-label="Slide 2" ></button>
                    <button type="button"    data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner rounded-5">
                    <div className="carousel-item active" data-bs-interval="10000">
                      <img className="d-block w-100" src={hemi} alt="" />
                      <div className="carousel-caption d-none d-md-block">
                        <h5 className="fw-bold">Hemiplejia</h5>
                        <p> La hemiplejia es una parálisis completa o incompleta
                          de la mitad del cuerpo que produce una importante
                          discapacidad física.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img className="d-block w-100" src={izque} alt="" />
                      <div className="carousel-caption d-none d-md-block">
                        <h5 className="fw-bold">Isquémico</h5>
                        <p>
                          Un accidente cerebrovascular isquémico ocurre cuando
                          se interrumpe o se reduce el suministro de sangre a
                          una parte del cerebro.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={hemo} alt="" />
                      <div className="carousel-caption d-none d-md-block">
                        <h5 className="fw-bold">Hemorrágico</h5>
                        <p>
                          Un accidente cerebrovascular hemorrágico se produce
                          por la rotura de un vaso sanguíneo en el cerebro,
                          causando una hemorragia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"style={{ backgroundColor: '#00b2f8'}} aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" >
                    <span className="carousel-control-next-icon" style={{ backgroundColor: '#00b2f8' }} aria-hidden="true" ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tercero;
