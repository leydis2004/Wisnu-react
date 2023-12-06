import "./App.jsx";
import Img from '/fondo-totall.png'
import Car from '/segundo.png'

function Segundo() {
  return (
    <>
      <section id="segundo" style={{ backgroundImage: `url(${Img})` }}>
        <a id="Wisnu"></a>
        <div className="container">
          <div className="row rounded-4 mt-5 shadow" style={{ backgroundColor: '#f1f1f1' }}>
            <div className="col-md-6 col-md-6 col-lg-3" style={{ width: '597px' }}>
              <div>
                <div className="p-5">
                  <img className="img-fluid" src={Car} style={{width: '500px'}} alt=""/>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-md-6 col-lg-3">
              <div>
                <div className="about-txt p-5" style={{fontSize: '20px', textAlign: 'center', marginTop: '61px', width: '491px',}}>
                  <a id="wisnu"></a>
                  <div className="wis1 ">
                    <h1 className="container-fluid fw-bold text-info">Wisnu</h1>
                    <p className=""> A través del tiempo ha sido notorio en la sociedad la
                      exclusión hacia las personas con discapacidad, por esta
                      razón nace Wisnu, un proyecto que tiene como proposito
                      llevar acabo un comic interactivo para hacer conciencia
                      sobre las vivencias y situaciones que suelen pasar las
                      personas con discapacidad,enfocándose en la hemiplejia,
                      causada por un accidente cerebrovascular
                    </p>
                  </div>
                  <button type="button" className="btn btn-outline-info ">
                    <a href="https://youtu.be/4hB9TJ76lmI" className="btn-2 text-black-50 fw-bold" style={{textDecoration: 'none'}}>Ver Video</a>
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

export default Segundo;
