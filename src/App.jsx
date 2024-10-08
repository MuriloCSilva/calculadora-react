import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [currentNumber, setCurrentNumber] = useState("")

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev}${number}`)
  }

  const handleClearAll = () => {
    setCurrentNumber("");
  }

  const handleCalculate = () => {
    setCurrentNumber(`${eval(currentNumber)}`)
  }

  return (
    <>
      <main className='bg-[#24303c] w-[100vw] h-[100vh] flex items-center justify-center'>
        <div className='bg-[#1d2731] p-5 w-[300px] h-[400px] box-shadow shadow-2xl flex flex-col justify-between'>
          <h2 className='text-2xl font-bold text-white'>Calculadora</h2>
          <p className='w-[100%] h-10 px-4 bg-white text-black border-none outline-none rounded-sm my-5 font-semibold text-xl flex items-center'>{currentNumber}</p>
          <div className='flex flex-col gap-y-2'>
            <div className='flex flex-row justify-between'>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('0')}>0</button>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('/')}>/</button>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleClearAll()}>C</button>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('*')}>X</button>
            </div>
            <div className='flex flex-row justify-between'>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('1')}>1</button>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('2')}>2</button>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('3')}>3</button>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('-')}>-</button>
            </div>
            <div className='flex flex-row justify-between'>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('4')}>4</button>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('5')}>5</button>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('6')}>6</button>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('+')}>+</button>
            </div>
            <div className='flex flex-row justify-between'>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('7')}>7</button>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('8')}>8</button>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#2e3d4a] font-semibold' onClick={() => handleAddNumber('9')}>9</button>
              <button className='w-[50px] h-[50px] rounded-md p-2 text-white bg-[#057bfc] font-semibold' onClick={() => handleCalculate()}>=</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
