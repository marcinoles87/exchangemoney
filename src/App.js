import { useState } from "react";

function App() {

  const [value , setValue] = useState(0);
  const [valuePln , setValuePln] = useState(0);
  const [valueUsd , setValueUsd] = useState(0);
  const [valueEur , setValueEur] = useState(0);
  const [valueGb , setValueGb] = useState(0);

  console.log(value)

  const handleOnChange = (e) => {

    const selectedValue = document.getElementById('selectedMoney')
    console.log(selectedValue.options[selectedValue.index])

    const valueInput = e.target.value
    console.log(valueInput)
    setValue(valueInput)
    setValuePln(valueInput*1)
    setValueEur(valueInput*0.432)
    setValueGb(valueInput*0.512)
    setValueUsd(valueInput*0.390)
    

  }

 


  return (
  <>
    <div className="container">

      <h1>Exchange Cantor</h1>

      <div className="input-container">
        <input placeholder="value" onChange={handleOnChange}></input>
      </div>

      <div className="select-value" id="selectedMoney">
        <select>
          <option value={4.5}>EUR</option>
          <option value={1}>PLN</option>
          <option value={3.9}>USD</option>
          <option value={5.1}>GB</option>
        </select>
      </div>

      <div className="change-container">
        <p>Your salary : {value}</p>
        <p>your salry in PLN : {valuePln}</p>
        <p>your salry in USD : {valueUsd}</p>
        <p>your salry in EUR : {valueEur}</p>
        <p>your salry in GB : {valueGb}</p>

      </div>


    </div>
    
 
  </>
  );
}

export default App;
