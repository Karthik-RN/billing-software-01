import React, {useState} from 'react'
import { ItemField } from '../components/bill/BillComponents';
import { MdDeleteForever,MdOutlineAdd } from '../assets/icons/Icons'


function BillForm() {

  const [inputFields, setInputFields] = useState([{ value: '' }]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ value: '' });
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    for (let val in values) {
      console.log(`value : ` + val)
    }
    
    values.splice(index, 1);
    for (let val in values) {
      console.log(`value : ` + val)
    }
    setInputFields(values);
  };


  return (
    <div>

    <header>
      <div className="border-2 border-black bg-indigo-600 bg-opacity-80 rounded-lg mx-auto my-8 px-4 py-6 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 flex flex-row justify-center items-center">
        <h1 className='  text-3xl text-black font-bold' >Billing Information</h1>
      </div>
    </header>

    <div className='mt-5 flex flex-col justify-start items-center'>
        <form >
          <div className='flex flex-col justify-start items-center '>
           {inputFields.map((inputField, index) => (
          <div className='flex flex-row mt-4 mb-4' key={index}>
            <ItemField itemNumber={index+1}/>
            <div className='mx-auto my-auto h-10 w-10 border-2 border-black bg-red-700 rounded-md font-bold text-xl flex flex-row justify-center item-center'> <button type="button" onClick={() => {handleRemoveFields(index)}}> <MdDeleteForever/> </button> </div>

          </div>
        ))} 
            
          </div>
        </form>
         <button type="button" onClick={() => handleAddFields() } className='border-1 border-black bg-green-600 mt-1 text-3xl rounded-full'> <MdOutlineAdd /> </button> 
    </div>
    </div>
  )

}

export default BillForm
