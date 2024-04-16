import React, { useId } from 'react'

function ItemField({itemNumber}) {
  const id = useId()

  return (
    <div className='flex flex-row justify-around'>

      <div className='w-10 h-10 my-auto mr-3 flex flex-row justify-center items-center bg-indigo-600 rounded-md border-2 border-black'> <label className=' font-normal text-2xl' htmlFor={id}> {itemNumber} </label> </div> 
      <div className='flex flex-row justify-center items-center '> <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl ml-3 mr-3 border-2 border-black' type='text' id={id} placeholder='Item Name'></input> </div>
      <div className='flex flex-row justify-center items-center'> <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl ml-3 mr-3 border-2 border-black' type='text' placeholder='Item Description'></input> </div>
      <div className='flex flex-row justify-center items-center'> <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-2xl ml-3 mr-3 w-20 border-2 border-black' type='text' placeholder='Price'></input> </div>
      <div className='flex flex-row justify-center items-center'> <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-2xl ml-3 mr-3 w-20 border-2 border-black' type='text' placeholder='Qty'></input> </div>

    </div>
  )
}

export default ItemField

// w-10 h-10 mr-3 flex flex-row justify-center items-center bg-indigo-600 rounded-lg
// w-100 h-10 ml-3 bg-indigo-600 rounded-lg

