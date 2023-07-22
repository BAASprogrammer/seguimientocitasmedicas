import React from 'react';

const NoResults = ({nombrelistado}) => {
  return (
    <div className='bg-cyan-600 text-white text-center font-bold p-3 rounded-lg mt-2'>
      <p>Sin resultados para el listado de {nombrelistado}</p>
    </div>
  );
}

export default NoResults;
