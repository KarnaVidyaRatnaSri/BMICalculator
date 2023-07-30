import './Styles.css'
import React, { useState } from 'react';
const BMICalci = () => {
  const [weight, setW] = useState('');
  const [height, setH] = useState('');
  const [Res, setRes] = useState(null);
  const [Mes, setMes] = useState('');
  const calculation = () => {
    if (!weight || !height) {
      alert('Please enter weight and height.');
      return;
    }
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    setRes(bmi);
    if (bmi < 18.5) {
      setMes('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMes('Normal');
    } else if (bmi >= 25 && bmi < 29.9) {
      setMes('Overweight');
    } else {
      setMes('Obesity');
    }
  };
  return (
    <form>
      <label>Weight(kg)</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setW(e.target.value)}/>
      <label>Height(cm)</label>
      <input
        type="number"
        value={height}
        onChange={(e) => setH(e.target.value)}/>
      <button type="button" onClick={calculation}>
        Calculate BMI
      </button>
      {Res && (
        <div>
          <h2>Your BMI is : {Res}</h2>
          <h2>your category is</h2>
          <input type="text" value={Mes} readOnly />
        </div>
      )}
    </form>
  );
};
export default BMICalci;
