import React, { useId, useState } from 'react'

function ItemField({indexValue}) {
  

  const id = useId()
  const [itemName,setitemName] = useState('')
  const [itemDesc,setitemDesc] = useState('')
  const [itemPrice,setitemPrice] = useState(0)
  const [itemQty,setitemQty] = useState(0)
  
  const changeName  =   (event)  =>   { setitemName(event.target.value);  };
  const changeDesc  =   (event)  =>   { setitemDesc(event.target.value);  };
  const changePrice =   (event)  =>   { setitemPrice(event.target.value); };
  const changeQty   =   (event)  =>   { setitemQty(event.target.value);   };

  return (
    <div className='flex flex-row justify-around'>

      <div className='w-10 h-10 my-auto mr-3 flex flex-row justify-center items-center bg-indigo-600 rounded-md border-2 border-black'> <label className=' font-normal text-2xl' htmlFor={id}> {indexValue+1} </label> </div> 
      <div className='flex flex-row justify-center items-center '> <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl ml-3 mr-3 border-2 border-black' type='text' id={id} placeholder='Item Name' value={itemName} onChange={handleNameEvent}></input> </div>
      <div className='flex flex-row justify-center items-center'> <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl ml-3 mr-3 border-2 border-black' type='text' placeholder='Item Description' value={itemDesc} onChange={handleDescEvent}></input> </div>
      <div className='flex flex-row justify-center items-center'> <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-2xl ml-3 mr-3 w-20 border-2 border-black' type='text' placeholder='Price' value={itemPrice} onChange={handlePriceEvent}></input> </div>
      <div className='flex flex-row justify-center items-center'> <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-2xl ml-3 mr-3 w-20 border-2 border-black' type='text' placeholder='Qty' value={itemQty} onChange={handleQtyEvent}></input> </div>

    </div>
  )


}

export default ItemField

