import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function CustomerForm() {
  const [customerName,setCustomerName] = useState('')
  const [gst,setGST] = useState('')
  const [addressL1,setaddressL1] = useState('')
  const [addressL2,setaddressL2] = useState('')
  const [city,setCity] = useState('')
  const [state,setState] = useState('')
  const [zip,setZip] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')

  const handleChange = (event,setValue) => { setValue(event.target.value); }

  return (
    <div>
      <header>
        <div className="border-2 border-black bg-indigo-600 bg-opacity-80 rounded-lg mx-auto my-8 px-4 py-6 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 flex flex-row justify-center items-center">
          <h1 className='  text-3xl text-black font-bold' >Customer Information</h1>
        </div>
      </header>
      <div className='flex flex-col justify-start items-center'>
        <form className='flex flex-row justify-center items-start'>

          <div className='flex flex-col justify-start items-start mb-auto mr-5 py-5'>
            
              <label className=' border-2 border-black bg-gray-900 px-2 py-2 rounded-md font-normal text-3xl text-white mb-5 ml-auto' htmlFor='CName'>Customer Name : </label>
              <label className=' border-2 border-black bg-gray-900 px-2 py-2 rounded-md font-normal text-3xl text-white mb-5 ml-auto' htmlFor='CGST'>Customer GST: </label>
              <label className=' border-2 border-black bg-gray-900 px-2 py-2 rounded-md font-normal text-3xl text-white mb-5 ml-auto' htmlFor='CAddr'>Customer Address: </label>

          </div>

          <div className='flex flex-col justify-center items-center my-auto ml-5 py-5  ' >
            
            <input id='CName' className= 'bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl mb-5 mr-auto border-2 border-black' type="text" placeholder="Full Name" value={customerName} onChange={(e) => { handleChange(e,setCustomerName) }}/>
            <input id='CGST'  className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl mb-5 mr-auto border-2 border-black' type="text" placeholder="GSTIN" value={gst} onChange={(e) => { handleChange(e,setGST) }}/>
            <input id='CAddr' className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl mb-5 mr-auto border-2 border-black' type="text" placeholder="Steet Number and Name" value={addressL1} onChange={(e) => { handleChange(e,setaddressL1) }}/>
            <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl mb-5 mr-auto border-2 border-black' type="text" placeholder="House or Apartment #" value={addressL2} onChange={(e) => { handleChange(e,setaddressL2) }}/>
            <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl mb-5 mr-auto border-2 border-black' type="text" placeholder="City" value={city} onChange={(e) => { handleChange(e,setCity) }}/>
            <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl mb-5 mr-auto border-2 border-black' type="text" placeholder="State" value={state} onChange={(e) => { handleChange(e,setState) }}/>
            <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl mb-5 mr-auto border-2 border-black' type="text" placeholder="Zip" value={zip} onChange={(e) => { handleChange(e,setZip) }}/>
            <input className=' bg-indigo-600 px-2 py-2 rounded-md font-normal text-3xl mb-5 mr-auto border-2 border-black' type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => { handleChange(e,setPhoneNumber) }}/>
            </div>

            
        </form>
        <Link  to='/bills/create-new-bill/billing-info' className='bg-green-500 h-10 w-17 rounded-md flex flex-row justify-center items-center px-8 py-8  border-2 border-black'><h1 className=' text-xl mr-1 font-bold'>Go to Bill Info</h1> </Link>
      </div>
    </div>
)
}

export default CustomerForm

 