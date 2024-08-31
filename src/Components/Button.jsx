import React from 'react'

const Button = ({children}) => {
  return (
    <button className='text-xl font-semibold bg-green-400 rounded-md px-3 py-1 text-white my-2'>{children}</button>
  )
}

export default Button
