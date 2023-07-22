import React from 'react';

const Error = ({mensaje}) => {
  return (
    <div className=' bg-red-900 text-white p-2 text-center font-bold rounded-md'>{mensaje}</div>
  );
}

export default Error;
