import React from 'react'


const Card = ({pokemon}) => {
  return (
    <div className='m-3 shadow-md px-5 py-10 rounded-lg shadow-gray-500'>
      <p className='font-bold mb-3 text-indigo-600 uppercase'>NOMBRE:{' '}
        <span className='font-normal normal-case'>{pokemon.name}</span></p>
        <p className='font-bold mb-3 text-indigo-600 uppercase'>Tipo:{' '}
        <span className='font-normal normal-case'>{pokemon.url}</span></p>
        
    </div>
  )
}

export default Card
