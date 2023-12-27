import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import './App.css'

function App() {

  const [value , setValue] = useState(0);
  const [valuePln , setValuePln] = useState(0);
  const [valueEur , setValueEur] = useState(0);
  const [valueUsd , setValueUsd] = useState(0);


  const handleOnChange = (e) => {

    const moneySelected = document.getElementById('selectedMoney');
    const cashSelected = moneySelected.value;

    let salary = e.target.value
    console.log(salary)

    setValue(salary)
    setValuePln(salary * cashSelected)
    setValueEur(salary)

    if(cashSelected >= 4.5){
      console.log('eur')
      setValuePln((salary * 4.32).toFixed(2))  
      setValueUsd((salary * 1.1010).toFixed(2))
    }

    if(cashSelected < 2){
      console.log('pln')
      setValueEur((salary * 0.23).toFixed(2))
      setValueUsd((salary * 0.25).toFixed(2))
    }

    if(cashSelected >= 2 && cashSelected < 4){
      console.log('usd')
      setValueEur( (salary * 0.907).toFixed(2))
      setValuePln( (salary * 3.93).toFixed(2))
      setValueUsd( (salary *1).toFixed(2))
    }

    
    
  }

  const handleSelect = () =>{
    
    const inputField = document.querySelector('input');
    console.log(inputField);
    inputField.value = '';
    setValue(0);
    setValueEur(0);
    setValuePln(0);
    setValueUsd(0);
  }

 


  return (
  <>
    <div className="exchange-container">

      <h1>Exchange Cantor</h1>

      <div className="input-container">
        <input placeholder="value" onChange={handleOnChange}></input>
      </div>

      <div className="select-value" >
        <select id="selectedMoney" onChange={handleSelect}>
          <option value={4.5}>EUR</option>
          <option value={1}>PLN</option>
          <option value={3.9}>USD</option>
          
        </select>
      </div>


      <div className="change-container">
        <p>Your salary : {value}</p>
        <div className="money-container">
          <p><ReactCountryFlag countryCode="PL" svg style={{width:'2em'}}/> Your salary in Pln : {valuePln} </p>
        </div>
        
        <div className="money-container">
          <p><ReactCountryFlag countryCode="EU" svg style={{width:'2em'}}/> Your salary in Eur : {valueEur} </p>
        </div>

        <div className="money-container">
          <p><ReactCountryFlag countryCode="US" svg style={{width:'2em'}}/> Your salary in Usd : {valueUsd} </p>
        </div>
        
       
       
      </div>

      


    </div>
    
 
  </>
  );
}

export default App;
