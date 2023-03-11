import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className='bg-greenText text-xl sm:text-base cursor-pointer py-2 px-4 text-white font-titleFont rounded-md'>{text}</button>
    </div>
  )
}

export default Button