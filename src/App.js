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
    console.log(selectedValue)
    let vv = selectedValue.value
    console.log(vv)

    const valueInput = e.target.value
    console.log(valueInput)
    setValue(valueInput)
    setValuePln(valueInput*vv)
    setValueEur(valueInput*vv)
    setValueGb(valueInput*0.512/vv)
    setValueUsd(valueInput*0.390/vv)

    if(vv === 0.45){
      setValuePln(valueInput*vv[0],value)
      setValueEur(valueInput*1)
      setValueGb(valueInput*vv)
      setValueUsd(valueInput*vv)

    }

    if(vv === 3.9){
      setValuePln(valueInput*3.9/vv[1].value)
      setValueEur(valueInput*3.9/vv[0].value)
      setValueGb(vv[2].value/valueInput)
      setValueUsd(valueInput*10)

    }
    

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
          <option value={0.45}>EUR</option>
          <option value={0.1}>PLN</option>
          <option value={0.39}>USD</option>
          <option value={0.51}>GB</option>
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
