import { useState } from 'react'
import Button from './components/button'

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const handleNumberClick = (num: string) => {
    setDisplayValue(prev => prev === '0' ? num : prev + num);
  };

  const handleDivision = () => {
    setPreviousValue(displayValue);
    setOperation('÷');
    setDisplayValue('0');
  };

  const handleMultification = () => {
    setPreviousValue(displayValue);
    setOperation('x');
    setDisplayValue('0');
  };

  const handleAddition = () => {
    setPreviousValue(displayValue);
    setOperation('+');
    setDisplayValue('0');
  };

  const handleSubstraction = () => {
    setPreviousValue(displayValue);
    setOperation('-');
    setDisplayValue('0');
  };

  const handleSqureRoot = () => {
    setPreviousValue(displayValue);
    setOperation('√');
    const sq = Math.sqrt(Number(displayValue)) 
    setDisplayValue(String(sq));
  };

  const handleModulus = () => {
    setPreviousValue(displayValue);
    setOperation('%');
    setDisplayValue('0');
  };

  const handleEquals = () => {
    if (operation === '÷' && previousValue) {
      const result = parseFloat(previousValue) / parseFloat(displayValue);
      setDisplayValue(result.toString());
      setPreviousValue(null);
      setOperation(null);
    }

    if (operation === 'x' && previousValue) {
      const result = parseFloat(previousValue) * parseFloat(displayValue);
      setDisplayValue(result.toString());
      setPreviousValue(null);
      setOperation(null);
    }

    if (operation === '+' && previousValue) {
      const result = parseFloat(previousValue) + parseFloat(displayValue);
      setDisplayValue(result.toString());
      setPreviousValue(null);
      setOperation(null);
    }

    if (operation === '-' && previousValue) {
      const result = parseFloat(previousValue) - parseFloat(displayValue);
      setDisplayValue(result.toString());
      setPreviousValue(null);
      setOperation(null);
    }
    if (operation === '%' && previousValue) {
      const result = parseFloat(previousValue) % parseFloat(displayValue);
      setDisplayValue(result.toString());
      setPreviousValue(null);
      setOperation(null);
    }

  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-44 h-44'>
        <div className='flex items-end justify-end bg-red-50 h-14 my-2 rounded-md' > 
          <div className='px-2 py-1'>
            {displayValue}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1">
          <div><Button onClick={() => setDisplayValue('0')}>AC</Button></div>
          <div><Button >+/-</Button></div>
          <div><Button onClick={handleModulus}>%</Button></div>
          <div><Button onClick={handleDivision}>÷</Button></div>

          <div><Button onClick={() => handleNumberClick('7')}>7</Button></div>
          <div><Button onClick={() => handleNumberClick('8')}>8</Button></div>
          <div><Button onClick={() => handleNumberClick('9')}>9</Button></div>
          <div><Button onClick={handleMultification}>x</Button></div>
          <div><Button onClick={() => handleNumberClick('4')}>4</Button></div>
          <div><Button onClick={() => handleNumberClick('5')}>5</Button></div>
          <div><Button onClick={() => handleNumberClick('6')}>6</Button></div>
          <div><Button onClick={handleAddition}>+</Button></div>
          <div><Button onClick={() => handleNumberClick('1')}>1</Button></div>
          <div><Button onClick={() => handleNumberClick('2')}>2</Button></div>
          <div><Button onClick={() => handleNumberClick('3')}>3</Button></div>
          <div><Button onClick={handleSubstraction}>-</Button></div>
          <div><Button onClick={handleSqureRoot}>√</Button></div>
          <div><Button onClick={() => handleNumberClick('0')}>0</Button></div>
          <div><Button>.</Button></div>
          <div><Button onClick={handleEquals}>=</Button></div>
        </div>
      </div>
    </div>
  )
}

export default App
