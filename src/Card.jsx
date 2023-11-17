import './app.css';


function Card(props) {

  return (
    <>
   
    <div className='card'>
    <img className='cubo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCHFb-jJRwcR_-rVMxb0Y4fItSFEJSs1A1nyogT71gAGqPKK2SAT2tK0HUEsAu86vSnA&usqp=CAU" alt="" />

      <h1 className='Card' style={{color:props.color}}> {props.lenguaje}</h1>
    
    
    </div>

    </>
  );
}

export default Card;
