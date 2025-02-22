import './App.css'
import AuthForm from './Components/AuthForm'
import DragInputForm from './Components/DragInputForm'
import ListView from './Components/ListView'
import PaymentForm from './Components/PaymentForm'
import SearchableDropdown from './Components/searchabledropdown'



function App() {

  return (
    <>
    <div id="app"
    className="flex flex-col items-center justify-center gap-4">

      <SearchableDropdown />

      <DragInputForm />

      <ListView />
      <AuthForm />
       <PaymentForm />
    </div>
    </>
  )
}

export default App
