import { useState } from 'react';
import './App.css';

function App() {
  const [bottles, setBottles] = useState (0)
  const [weight, setWeight] = useState (0)
  const [time, setTime] = useState (0)
  const [gender, setGender] = useState (0)
  const [result, setResult] = useState (0)

  function calculate(e) {
    e.preventDefault()
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsLeft = grams - (burning * time)
    const maleResult = gramsLeft / (weight * 0.7)
    const femResult = gramsLeft / (weight * 0.6)


    if (maleResult < 0 || femResult < 0) {
      setResult(0)
    } else if (gender === "male") {
      setResult(maleResult)
    } else {
      setResult(femResult)
    }
  
  }


  return (
    <div>
      <h1>Calculating alcohol blood level</h1>
    <div id="container">
      <form onSubmit={calculate}>
        <div>
          <label>Weight (Kg)</label>
          <input value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles (0,33l)</label>
          <input type='number' value={bottles} onChange={e => setBottles(e.target.value)}/>
        </div>
        <div>
          <label>Time (hours)</label>
            <input type='number' value={time} onChange={e => setTime(e.target.value)}/>
             
        </div>
        <div>
          <label>Gender</label>
          <label><b>Male</b></label>
          <input type='radio' name='gender' value='male' onChange={e => setGender(e.target.value)}/>
          <label><b>Female</b></label>
          <input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)}/>
        </div>
        <div>
          <output>Blood Alcohol Level: {result.toFixed(2)} per mil</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
   </div>
  );
}

export default App;
