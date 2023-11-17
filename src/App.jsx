import './App.css'
import Card from './Card.jsx';

import Header from './Header.jsx'

function App(){
  return (
    <>
     <div className='proyecto'>
       <h1 className='contacto'>Proyect</h1> 
       <h3 className='me'>CONTAC ME</h3>
       </div>
       
    <div style={{ display:"flex", marginLeft:"110px"  
   }}>
    <div>
    <Card lenguaje="DESIGN PORTAFOLIO12121" color=" white" />
    <p>html</p>
    </div>
    <div>
    <Card lenguaje="E-LEARNING" color=" white"/>
    <p>html</p>
    </div>
   
    </div>
    <div style={{ display:"flex", marginLeft:"110px"  
   }}>
    
    <Card lenguaje="TODO WED APP" color=" white"/>
    <Card lenguaje="ENTERTAINMENT WEB APP" color=" white"/>
   
   
    </div>
    <div style={{ display:"flex", marginLeft:"110px"  
   }}>
    
    <Card lenguaje="MEMORY GAME" color=" white"/>
    <Card lenguaje="ART GALLERY SHOWCASE" color=" white"/>
   
   
    </div>
    </>
  )
}
 export default App;