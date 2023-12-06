import './App.jsx'
import logo from '/logopos.png'
import fondo from '/fondodary.png'


function Seccion() {

  return (
    <>
  <section id="intro">
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <img src={logo} style={{width: '150px'}} alt=""/>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
                <div className=" navbar-nav ml-auto fw-bold" id="navbarSupportedContent"
                  style={{ fontSize: '25px'}}>
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <a className="nav-link p-3" href="#Wisnu">Wisnu</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-3" href="#informacion">informacion</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-3" href="#Personajes">Personajes</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-3" href="#Comic">Comic</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-3" href="#Creador">Creador</a>
                    </li>
                  </ul>
                </div>
             </div>
             </div>
           </nav>
        <div className="row">
         <div className="col-6">
          <div className="header-img">
            <img className='' src={fondo} style={{width: '1190px' , marginTop:'-95px' , marginLeft:'-14px'}} alt=""/>
          </div>
         </div>
          <div className="col-md-6 col-md-6 col-lg-3 container-fluid">
            <div className="h-100 d-flex" style={{alignItems: 'center'}}>
              <div className="header-txt ">
               <h1 style={{color: 'rgb(84, 233, 233'}}>Bienvenidos</h1>
               <p style={{fontSize: '25px'}}>Wisnu, es un proyecto que se creó para jóvenes estudiantes y así presentar el
                diseño multimedial obteniendo como resultado un comic interactivo.
               </p>
               <div className="titu-port">
                <h2>¡Disfruta está experiencia!</h2>
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

export default Seccion;
