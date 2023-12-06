import "./App.jsx";
import logo from "/logopos.png";
import redes from "/redes.png";

function Septimo() {
  return (
    <>
       <section id="septimo" style={{backgroundColor:'#14bec7' , marginTop:'38px'}}>
    
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 col-md-6 col-lg-3">
          <div className="my-5 py-5">
            <img className="img-fluid w-100 h-100" src={logo} alt=""></img>
           
        </div>
      </div>
     
        <div className="col-md-6 ms-auto my-auto">
          <div className="d-flex">
          <img className="img-fluid" src={redes} alt=""></img>
          
        </div>
        </div>
    
        
    </div>
  </div>
  </section>
    </>
  );
}

export default Septimo;
