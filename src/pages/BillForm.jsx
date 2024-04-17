import React, {useId, useState} from 'react'
import { MdDeleteForever,MdOutlineAdd } from '../assets/icons/Icons'


function BillFormTest() {

    const billNumber = '2024#04#16-000001'
    const id = useId()

    const [inputFields, setInputFields] = useState([
      {iId:'', iName : '', iDesc : '', iQty : '', iPrice : ''}
    ])

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
     }

     const addFields = () => {
        let newfield = {iId:'', iName : '', iDesc : '', iQty : '', iPrice : ''}
        let data = [...inputFields];
        data.push(newfield)
    
        setInputFields(data)
    }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

    const saveToDatabase = () => {
      alert('Bill data saved');
    }

  return (
    <div>

    <header>
      <div className="border-2 border-black bg-indigo-600 bg-opacity-80 rounded-lg mx-auto my-8 px-4 py-6 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 flex flex-row justify-center items-center">
        <h1 className='  text-3xl text-black font-bold' >Billing Information</h1>
      </div>
    </header>

    <div className='mt-5 flex flex-col justify-start items-center  '>
        <div className='px-4 py-4'>
          <h1 className='text-3xl text-white'>{'Bill Number : ' + billNumber}</h1>
        </div>
        
        <form >
          <div className='flex flex-col justify-start items-center '>

          <div className='flex flex-row mt-4 mb-4 border-b-4 border-black' key={id}>
                <div className='flex flex-row justify-around'>
                    
                    <div className='flex flex-row justify-center items-center ' > 
                    <div className='w-10 h-10 my-auto mr-3 flex flex-row justify-center items-center bg-gray-800 rounded-md '> <label className=' font-bold text-2xl text-gray-400' > {'#'} </label> </div> 
                    <div className=' border-2 border-black py-8'></div>
                    <input 
                    className='bg-gray-800 px-2 py-2 rounded-md font-normal text-2xl ml-3 mr-3 placeholder-gray-400' name='iId' type='text' placeholder='Item Id' disabled></input>
                    <div className=' border-2 border-black py-8'></div>
                    <input className='bg-gray-800 px-2 py-2 rounded-md font-normal text-3xl ml-3 mr-3 placeholder-gray-400' name='iName'  type='text' placeholder='Item Name' disabled ></input></div>
                    <div className=' border-2 border-black py-8'></div>
                    <div className='flex flex-row justify-center items-center'  > <input className=' bg-gray-800 px-2 py-2 rounded-md font-normal text-3xl ml-3 mr-3 placeholder-gray-400' readOnly name='iDesc' type='text' placeholder='Item Description' disabled></input> </div>
                    <div className=' border-2 border-black py-8'></div>
                    <div className='flex flex-row justify-center items-center'  > <input className=' bg-gray-800 px-2 py-2 rounded-md font-normal text-xl ml-3 mr-3 w-20 placeholder-gray-400' readOnly name='iQty' type='number'  placeholder='Price' value={''} disabled></input> </div>
                    <div className=' border-2 border-black py-8'></div>
                    <div className='flex flex-row justify-center items-center'  > <input className=' bg-gray-800 px-2 py-2 rounded-md font-normal text-xl ml-3 mr-3 w-20 placeholder-gray-400' readOnly name='iPrice' type='number'  placeholder='Qty' value={''} disabled></input> </div>
                 
                </div>
                
                <div className='mx-auto my-auto h-10 w-10 bg-gray-800 rounded-md font-bold text-xl flex flex-row justify-center item-center' > 
                  <button disabled type="button" onClick={() => removeFields(index)}>  </button> 
                </div>
              </div>
        
            { inputFields.map((input, index) => (
              
          <div className='flex flex-row mt-4 mb-4 ' key={index}>
                <div className='flex flex-row justify-around'>
                    
                    <div className='flex flex-row justify-center items-center ' > 
                    <div className='w-10 h-10 my-auto mr-3 flex flex-row justify-center items-center bg-indigo-600 rounded-md border-2 border-black'> <label className=' font-normal text-2xl' htmlFor={index+1}> {index+1} </label> </div> 
                    <input 
                    className='bg-indigo-600 px-2 py-2 rounded-md font-normal text-2xl ml-3 mr-3 border-2 border-black' name='iId' id={index+1} type='text' placeholder='Item Id' value={input['iId']} onChange={event => handleFormChange(index,event)}></input>
                    <input className='bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl ml-3 mr-3 border-2 border-black' name='iName' type='text' placeholder='Item Name' value={input['iName']} onChange={ event => handleFormChange(index,event) } ></input></div>
                    <div className='flex flex-row justify-center items-center'  > <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl ml-3 mr-3 border-2 border-black' name='iDesc' type='text' placeholder='Item Description' value={input['iDesc']} onChange={ event => handleFormChange(index,event) }></input> </div>
                    <div className='flex flex-row justify-center items-center'  > <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-xl ml-3 mr-3 w-20 border-2 border-black' name='iQty' type='number' min={0} placeholder='Price' value={input['iQty']} onChange={ event => handleFormChange(index,event) }></input> </div>
                    <div className='flex flex-row justify-center items-center'  > <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-xl ml-3 mr-3 w-20 border-2 border-black' name='iPrice' type='number' min={0} placeholder='Qty' value={input['iPrice']} onChange={ event => handleFormChange(index,event) }></input> </div>
                 
                </div>
                
                <div className='mx-auto my-auto h-10 w-10 border-2 border-black bg-red-700 rounded-md font-bold text-xl flex flex-row justify-center item-center' > 
                  <button type="button" onClick={() => removeFields(index)}> <MdDeleteForever/> </button> 
                </div>
              </div>

            ))}  

          </div>
        </form>
        <div className=' flex flex-row justify-center items-center'> 
          <button type='button' onClick={() => saveToDatabase()} className='bg-green-600 mt-1 mr-2 px-3 py-1 rounded-xl border-2 border-black text-lg font-semibold'> SAVE </button> 
          <button type="button" onClick={() => addFields()} className='border-2 border-black bg-green-600 mt-1 ml-2 text-3xl rounded-full'> <MdOutlineAdd /> </button>  
        </div>
        
         
    </div>
    </div>
  )

}

export default BillFormTest
