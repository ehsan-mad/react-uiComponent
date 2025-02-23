import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Otp from './Components/Otp';
import Pricecard from './Components/Pricecard';
import Rating from './Components/Rating';
import TabLayout from './Components/Tab-Layout';
import Sidebarlayout from './Components/Sidebarlayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Otp/>
      <Pricecard/>
      <Rating/>
      <TabLayout/>
      <Sidebarlayout/>
    </>
  )
}

export default App
