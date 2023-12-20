import { useState } from "react";

function App() {

  const [value , setValue] = useState(0);
  const [valuePln , setValuePln] = useState(0);
  const [valueUsd , setValueUsd] = useState(0);
  const [valueEur , setValueEur] = useState(0);
  const [valueGb , setValueGb] = useState(0);

  console.log(value)

  const handleOnChange = (e) => {

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

      <div className="select-value">
        <select>
          <option value={0}>EUR</option>
          <option value={1}>PLN</option>
          <option value={2}>USD</option>
          <option value={3}>GB</option>
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
