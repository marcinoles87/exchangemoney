import { useEffect, useState } from "react";

function App() {

  const [value , setValue] = useState(0);
  const [valuePln , setValuePln] = useState(0);
  const [valueUsd , setValueUsd] = useState(0);
  const [valueEur , setValueEur] = useState(0);
  const [valueGbp , setValueGbp] = useState(0);
  const [vv , setVV] = useState()



  const handleOnChange = (e) => {

    const selectedValue = document.getElementById('selectedMoney')
    setVV(selectedValue.value)
    

    const valueInput = e.target.value
    console.log(vv)

    setValue(valueInput)
    setValuePln(value)
    setValueUsd(value*vv)
    setValueEur(value*vv)
    setValueGbp(value*vv)
    
  
  }

 


  return (
  <>
    <div className="container">

      <h1>Exchange Cantor</h1>

      <div className="input-container">
        <input placeholder="value" onChange={handleOnChange}></input>
      </div>

      <div className="select-value" >
        <select id="selectedMoney">
          <option value={4.5}>EUR</option>
          <option value={1}>PLN</option>
          <option value={3.9}>USD</option>
          <option value={3.67}>GB</option>
        </select>
      </div>

      <div className="change-container">
        <p>Your salary : {value}</p>
        <p>your salry in PLN : {valuePln}</p>
        <p>your salry in USD : {valueUsd}</p>
        <p>your salry in EUR : {valueEur}</p>
        <p>your salry in GB : {valueGbp}</p>

      </div>


    </div>
    
 
  </>
  );
}

export default App;
