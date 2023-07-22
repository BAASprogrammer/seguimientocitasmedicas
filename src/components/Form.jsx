import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Error from './Error';
// Creación formulario
// objeto pacientes y función setPacientes desde App.jsx
const Form = ({pacientes, setPacientes}) => {
  const [nombre, setNombre] = useState('');  
  const [papellido, setPapellido] = useState('');  
  const [sapellido, setSapellido] = useState('');  
  const [rut, setRut] = useState('');  
  const [fechaingreso, setFechaIngreso] = useState('');  
  const [horaingreso, setHoraIngreso] = useState('');  
  const [nombredoctor, setNombreDoctor] = useState(0);  
  const [errorcampo, setErrorCampo] = useState(false);  
  // setNombre('NoHook');
  // console.log(nombre);
  const handleSubmit = (e) => {
    e.preventDefault() 
    console.log('Validación formulario')
    if ([nombre, papellido, sapellido, rut, fechaingreso, horaingreso, nombredoctor].includes('')) {
      setErrorCampo(true)
      console.log(errorcampo)
      return;
    }
    setErrorCampo(false)

    const objectPacientes = {
      nombre,
      papellido,
      sapellido,
      rut,
      fechaingreso,
      horaingreso,
      nombredoctor
    }
    // toma una copia de pacientes y agrega a setPacientes el objeto con los datos
    setPacientes([...pacientes, objectPacientes])
    // Reiniciar el fomulario
    setNombre('')
    setPapellido('')
    setSapellido('')
    setRut('')
    setFechaIngreso('')
    setHoraIngreso('')
    setNombreDoctor('')

  } 
  return ( 
    <div className=' md:w-2/5'>
      <h1 className='text-2xl text-center font-bold'>Formulario</h1>
      <form action='' onSubmit={handleSubmit} className=' bg-white rounded-md py-10 px-5 mx-4 shadow-md mt-2'>
        {errorcampo && (
          <Error mensaje = 'Todos los campos son obligatorios'/>
        )} 
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="nombre">Nombre</label>
          <input type="text"  id="nombre" className='w-full p-2 mt-2 border-2 rounded-md' placeholder='Ingrese el nombre del paciente' value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="papellido">Primer Apellido</label>
          <input type="text"  id="papellido" className='w-full p-2 mt-2 border-2 rounded-md' placeholder='Ingrese el nombre del paciente' value={papellido} onChange={(e) => setPapellido(e.target.value)}  />
        </div>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="sapellido">Segundo Apellido</label>
          <input type="text"  id="sapellido" className='w-full p-2 mt-2 border-2 rounded-md' placeholder='Ingrese el nombre del paciente' value={sapellido} onChange={(e) => setSapellido(e.target.value)}  />
        </div>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="rut">RUT</label>
          <input type="text"  id="rut" className='w-full p-2 mt-2 border-2 rounded-md' placeholder='Ingrese el nombre del paciente' value={rut} onChange={(e) => setRut(e.target.value)} />
        </div>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="email">Fecha Ingreso</label>
          <input type="date"  id="email" className='w-full p-2 mt-2 border-2 rounded-md' placeholder='Ingrese el nombre del paciente' value={fechaingreso} onChange={(e) => setFechaIngreso(e.target.value)} />
        </div>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="hora">Hora Ingreso</label>
          <input type="time"  id="hora" className='w-full p-2 mt-2 border-2 rounded-md' value={horaingreso} onChange={(e) => setHoraIngreso(e.target.value)} />
        </div>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="doctores">Nombre Doctor</label>
          <select className='w-full p-2 mt-2 border-2 rounded-md' name="doctores" id="doctores" value={nombredoctor} onChange={(e) => setNombreDoctor(e.target.value*1)} >
            <option value="1">Pedro Faundez</option>
            <option value="2">Gabriela Echau</option>
            <option value="3">Verónica López</option>
          </select>
        </div>
        <input type="submit" className=' bg-green-800 text-white w-full p-2 mt-2 border-2 rounded-md hover:bg-green-600 cursor-pointer transition-all' value="Revisar" />
      </form>
    </div>
  ); 
}
 
export default Form;
