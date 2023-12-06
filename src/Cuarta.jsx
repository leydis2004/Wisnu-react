import "./App.jsx";
import Img from "/fondo-totall.png";
import ember1 from "/ember 4.jpg";
import emo1 from "/emo1212nnnn.jpg";
import emo2 from "/emo1212qqqqqq.jpg";

function Cuarta() {
  return (
    <>
      <section id="cuarto" style={{ backgroundImage: `url(${Img})` }}>
        <a id="Personajes"></a>
        <div className="container" style={{ backgroundColor: "#ffffff" }}>
          <div className="row">
            <div className="col-12">
              <div>
                <div className="mt-4" style={{ textAlign: "center" }}>
                  <h1 className="text-info fw-bold mt-5">Personajes</h1>
                  <p
                    className="text-body-secondary p-4"
                    style={{ fontSize: " 19px" }}
                  >
                    ¡Conoce más acerca de algunos de nuestros personajes!
                  </p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                  <div className="col">
                    <div className="card shadow mb-5 bg-body-tertiary rounded ">
                      <img className="card-img-top" src={ember1} alt="" />
                      <div className="card-body">
                        <h5 className="card-title" style={{ color: "#56d9dd" }}>
                          Ember
                        </h5>
                        <p className="card-text">
                          Ember es un joven de 23 años nacido en Cerebrum, una
                          ciudad llena de edificios coloridos y hermosas
                          personas. Es el protagonista de la historia
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow mb-5 bg-body-tertiary rounded">
                      <img className="card-img-top" src={emo1} alt="" />
                      <div className="card-body">
                        <h5 className="card-title" style={{ color: "#5d46a2" }}>
                          Emo
                        </h5>
                        <p className="card-text">
                          Emo uno de los personajes segundario de la historia es
                          caracterizado por ser tierno y a la vez muy tímido y
                          su pelo muestra lo contrario,vive en cerebrum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow mb-5 bg-body-tertiary rounded">
                      <img className="card-img-top" src={emo2} alt="" />
                      <div className="card-body">
                        <h5 className="card-title" style={{ color: "#56d9dd" }}>
                          Movhi
                        </h5>
                        <p className="card-text">
                          Es un personaje de esta historia muy importante, ya
                          que la familia movimiento se ve mucho en esta
                          historia, él es muy divertido y nunca está quieto.
                        </p>
                      </div>
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

export default Cuarta;
