import React from 'react';
import Patients from './Patients';

function PatientsList() {
  return (
    <div className='w-3/5 md:h-full'>
      <h2 className='text-center font-bold text-2xl'>Listado Pacientes</h2>
      <div className='  md:w-full max-[1024px]:overflow-y-scroll'>
        <Patients/>
        <Patients/>
        <Patients/>
        <Patients/>
        <Patients/>
      </div>
        
    </div>
  );
}

export default PatientsList;
