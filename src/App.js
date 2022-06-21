import { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);
  const [substract, setSubstract] = useState(number1 + number2);
  const [multiplication, setMultiplication] = useState(number1 + number2);
  const [division, setDivision] = useState(number1 + number2);

  const addHandle = () => {
    setTotal(parseInt(number1) + parseInt(number2) )
  }

  const substractHandle = () => {
    setSubstract(number1 - number2 )
  }

  const multiplicationHandle = () => {
    setMultiplication(number1 * number2 )
  }

  const divisionHandle = () => {
    setDivision(number1 / number2 )
  }

  return (
    <div className="App">
      <div className='number_inputs'>
        <div className='input1'>
            <label>Number 1 :</label>
            <input type="number" placeholder="0"
             onChange={e => setNumber1(e.target.value)}/>
        </div>
        <div className='input1'>
          <label>Number 2 :</label>
          <input type="number" placeholder="0"
          onChange={e => setNumber2(e.target.value)}
          />
        </div> 
      </div>

     {/* Buttons */}

      <div className='buttonflex'>
        <div className='buttons'>
          <button type="button" class="btn btn-primary" onClick={addHandle}>Add</button>
          <span className='value'>{total}</span>
        </div>
        <div className='buttons'>
          <button type="button" class="btn btn-secondary" onClick={substractHandle}>Subtract</button>
          <span className='value'>{substract}</span>
        </div>
        <div className='buttons'>
          <button type="button" class="btn btn-success" onClick={multiplicationHandle}>Multiplication</button>
          <span className='value'>{multiplication}</span>
        </div> 
        <div className='buttons'>
          <button type="button" class="btn btn-danger" onClick={divisionHandle}>Division</button>
          <span className='value'>{division}</span>
        </div>  
      </div>
      
    </div>
  );
}

export default App;
