import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import PatientsList from './components/PatientsList'

// rfce
function App() {
  const [count, setCount] = useState(0)
  let genero = 'F';
  const [pacientes, setPacientes] = useState([])

// se puede retornar máximo 1 elemento en en nivel más alto, <> en este caso, si son dos tirará error
  return (
    <>
    {/* mostrar datos por interfaz */}
    {/* {'Hola '}
    {genero == 'F' ? genero = 'eres mujer'.toUpperCase() : genero = 'eres hombre'} */}
      <div className='container pt-10 lg:w-full max-w-full px-2 mx-auto bg-gray-300'>
        <Header />
        <div className='md:flex mt-5 '>
          <Form 
            pacientes = {pacientes}
            setPacientes = {setPacientes} 
          />
          <PatientsList 
            pacientes = {pacientes}
          />
        </div>
      </div>
    </>
  )
}

export default App
