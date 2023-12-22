import { useState } from "react";

function App() {

  const [value , setValue] = useState(0);
  const [valuePln , setValuePln] = useState(0);
  const [valueUsd , setValueUsd] = useState(0);
  const [valueEur , setValueEur] = useState(0);
  const [valueGbp , setValueGbp] = useState(0);

  console.log(value)

  const handleOnChange = (e) => {

    const selectedValue = document.getElementById('selectedMoney')
    console.log(selectedValue)
    let vv = selectedValue.value
    console.log(vv)

    const valueInput = e.target.value
    console.log(valueInput)

    if( vv === 0.45)
    setValue(valueInput)
    setValuePln(valueInput*vv*10)
    setValueEur(valueInput)
    setValueGbp(valueInput*0.87)
    setValueUsd(valueInput*1.10)

    if(vv === 0.45){
      console.log('euro')
      setValuePln(valueInput*vv*10)
      setValueEur(valueInput*1)
      setValueGbp(valueInput*vv)
      setValueUsd(valueInput*vv)

    }

    if(vv === 3.9){
      console.log('usd')

      setValuePln(valueInput*3.9/vv[1].value)
      setValueEur(valueInput*3.9/vv[0].value)
      setValueGbp(vv[2].value/valueInput)
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
          <option selected value={0.45}>EUR</option>
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
        <p>your salry in GB : {valueGbp}</p>

      </div>


    </div>
    
 
  </>
  );
}

export default App;
