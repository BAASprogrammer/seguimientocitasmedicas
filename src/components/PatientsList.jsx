import React from 'react';
import Patients from './Patients';
import NoResults from './NoResults';
// nunca olvidar el return en una arrow function si tiene más de
// 1 parámetro, si tiene sólo 1 se puede omitir, si lo olvidas saldrá error
// objeto pacientes desde App.jsx
const PatientsList = ({pacientes}) => {
  return (
    <div className='md:w-3/5 md:h-full'>
      <h2 className='text-center font-bold text-2xl'>Listado Pacientes</h2>
      <div className='  md:w-full max-[1024px]:overflow-y-scroll'>
        {/* <Patients/>
        <Patients/>
        <Patients/>
        <Patients/>
        <Patients/> */}
        {/* recorre el arreglo y crea otro con el resultado */}
        { pacientes.length === 0 && 
          <NoResults nombrelistado = 'pacientes'/>
        }
        { pacientes.map((paciente) => {
          return(
            <Patients 
              paciente = {paciente}
            />
          ) 
        })}
      </div>
        
    </div>
  );
}

export default PatientsList;
