const Patients = () => {
    return(
        <div className='text-gray-700 w-full bg-white px-3 py-3 rounded-lg mb-5 shadow-md'>
            <p className='font-bold mb-3'>Nombre: {''}
                <span className='font-normal'>Pedro</span>
            </p>
            <p className='font-bold mb-3'>Apellidos: {''}
                <span className='font-normal'>Jara Filo</span>
            </p>
            <p className='font-bold mb-3'>RUT: {''}
                <span className='font-normal'>19.321.456-K</span>
            </p>
            <p className='font-bold mb-3'>Fecha y Hora Reserva: {''}
                <span className='font-normal'>22-02-2023 {''} 13:23 hrs.</span>
            </p>
            <p className='font-bold mb-3'>Nombre Doctor: {''}
                <span className='font-normal'>Pedro</span>
            </p>
            <p className='font-bold mb-3'>Especialidad: {''}
                <span className='font-normal'>Medicina General</span>
            </p>
            <p className='font-bold mb-3'>Estado Reserva: {''}
                <span className='font-normal'>Hora Confirmada</span>
            </p>
        </div> 
    )
}

export default Patients