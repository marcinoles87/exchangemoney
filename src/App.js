import { useEffect, useState } from "react";

function App() {

  const [value , setValue] = useState(0);
  const [valuePln , setValuePln] = useState(0);
  const [valueUsd , setValueUsd] = useState(0);
  const [valueEur , setValueEur] = useState(0);
  const [valueGbp , setValueGbp] = useState(0);
  const [vv , setVV] = useState()


 const handeSelect = () => {
  setVV( () => {
    const selectedValue = document.getElementById('selectedMoney')
    let vv = selectedValue.value
    return vv
  }
  )
 }
  

  const handleOnChange = (e) => {

    const valueInput = e.target.value

    setValue(valueInput)

    console.log(vv)

    if(vv === 1){
    console.log('euro')
    setValuePln(valueInput*4.5)
    setValueEur(valueInput*1)
    setValueGbp(valueInput*0.87)
    setValueUsd(valueInput*1.10)
    }

    if(vv === 2){
     console.log('pln')
      setValuePln(valueInput)
      setValueEur(valueInput*4.5)
      setValueGbp(valueInput*3.9)
      setValueUsd(valueInput*3.94)

    }

  }

 


  return (
  <>
    <div className="container">

      <h1>Exchange Cantor</h1>

      <div className="input-container">
        <input placeholder="value" onChange={handleOnChange}></input>
      </div>

      <div className="select-value" onChange={handeSelect}>
        <select id="selectedMoney">
          <option value={1}>EUR</option>
          <option value={2}>PLN</option>
          <option value={3}>USD</option>
          <option value={4}>GB</option>
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
