import { useEffect, useState } from "react";

function App() {

  const [value , setValue] = useState(0);
  const [valuePln , setValuePln] = useState(0);
  const [valueEur , setValueEur] = useState(0);


  const handleOnChange = (e) => {

    const moneySelected = document.getElementById('selectedMoney');
    const cashSelected = moneySelected.value;

    let salary = e.target.value
    console.log(salary)

    setValuePln(salary * cashSelected)
    setValueEur(salary * cashSelected)
    
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
        <p>your salry in EUR : {valueEur}</p>
       
      </div>

      <button>Change Money</button>


    </div>
    
 
  </>
  );
}

export default App;
