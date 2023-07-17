import React from 'react';

function Form() {
  return (
    <div className=' w-2/5'>
      <h1 className='text-2xl text-center font-bold'>Formulario</h1>
      <form action="" className=' bg-white rounded-md py-10 px-5 mx-4 shadow-md'>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="nombre">Nombre</label>
          <input type="text"  id="nombre" className='w-full p-2 mt-2 border-2 rounded-md' placeholder='Ingrese el nombre del paciente' />
        </div>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="papellido">Primer Apellido</label>
          <input type="text"  id="papellido" className='w-full p-2 mt-2 border-2 rounded-md' placeholder='Ingrese el nombre del paciente' />
        </div>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="sapellido">Segundo Apellido</label>
          <input type="text"  id="sapellido" className='w-full p-2 mt-2 border-2 rounded-md' placeholder='Ingrese el nombre del paciente' />
        </div>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="rut">RUT</label>
          <input type="text"  id="rut" className='w-full p-2 mt-2 border-2 rounded-md' placeholder='Ingrese el nombre del paciente' />
        </div>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="email">Fecha Ingreso</label>
          <input type="date"  id="email" className='w-full p-2 mt-2 border-2 rounded-md' placeholder='Ingrese el nombre del paciente' />
        </div>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="hora">Hora Ingreso</label>
          <input type="time"  id="hora" className='w-full p-2 mt-2 border-2 rounded-md' value={'12:00'}/>
        </div>
        <div className='mb-4'>
          <label className='block font-bold' htmlFor="doctores">Nombre Doctor</label>
          <select className='w-full p-2 mt-2 border-2 rounded-md' name="doctores" id="doctores">
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
