import { useState } from "react";

function App() {
  const [cuenta, setCuenta] = useState(0);
  const [paso, setPaso] = useState(1);
  const handleClick1= () => {
    setCuenta(cuenta + paso);
  };
  const handleClick2 = () => {
    setCuenta(cuenta - paso);
  };
  const handleClick3 = () => {
    setCuenta(cuenta - cuenta);
    setCuenta(0);
    setPaso(1);
  };
  const handleInputChange = (e) =>{
    if (isNaN(e.target.value)){
      return;
    }
    setPaso(Number(e.target.value));
  }
  return (
    <div className="App">
      <h3 class="text-center fw-light bg-dark p-2 text-white">Contador</h3>
      <hr />
      <h2 class="text-center fw-light bg-success p-2 text-white">{cuenta}</h2>
      <hr />
      <div class="d-grid gap-2 d-md-flex justify-content-md-end btn-group input-group input-group-sm mb-3" role="group" aria-label="Basic mixed styles example" style={ {display: "flex", justifyContent: "flex-end", marginRight:"20px"} }>
        <label>
          Paso:
        <input 
        name="paso" 
        id="paso" 
        value= {paso}
        type="text" 
        onChange={handleInputChange} 
        style={ {marginleft: "5px", width: "60px"}}/>
        </label>
        
        <button type="button" className="btn btn-lg btn-outline-primary" onClick={ () => {
          handleClick1();
        }}>+1</button>
        <button type="button" className="btn btn-lg btn-outline-warning" onClick={ () => {
          handleClick3();
        }}>RESET</button>
          <button type="button" className="btn btn-lg btn-outline-danger" onClick={ () => {
          handleClick2();
        }}>-1</button>
         
      </div>

    </div>
  );
}

export default App;
