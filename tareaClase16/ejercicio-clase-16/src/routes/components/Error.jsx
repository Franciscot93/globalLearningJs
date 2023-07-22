import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div>
      <div className="bg-red-800 p-3 mb-4 rounded-md text-center font-bold">
          <p className="text-white">
          {mensaje}
          </p>
        </div>
    </div>
  )
}

export default Error
