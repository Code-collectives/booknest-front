import React from 'react'

export default function CardWrapper({image, title, author}) {
  return (
    <div className='max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105'>
    <img src={image} alt="" className='w-full h-48 object-cover' />
    <div className='p-4'>
      <h1 className='text-2xl font-semibold text-gray-800'>{title}</h1>
      <p className='text-gray-600 mt-2'>{author}</p>
    </div>
  </div>
  
  
  )
}
