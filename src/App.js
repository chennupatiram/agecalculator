import './App.css';

import { useState } from "react";
import AgeCalculatorForm from "./components/AgeCalculatorForm";
import AgeResult from "./components/AgeResult";
import { differenceInYears } from 'date-fns'

function App() {

  const[age, setAge] = useState(null);

  const calculateAge =(birthDate) =>{
    const today = new Date();
    const birthdateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthdateObj);
    setAge({
      years: ageYears,
    });
  };


  return (
    <div className="form">
      <center>
      <h1>Age Calculator</h1>
      <h3><b>Enter your Date of Birth </b></h3>
      <AgeCalculatorForm  calculateAge={calculateAge}/>
      {age && <AgeResult age={age}  />}
      </center>
    </div>
  );
}

export default App