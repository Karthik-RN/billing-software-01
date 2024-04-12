import { Link } from "react-router-dom"

function HomePage() {

  return (
    <div className='max-w-1280 mx-auto px-8 text-center font-sans leading-6 font-normal'>
      <h1 className='text-6xl leading-tight text-white'>Ultimate Electro Enterprises</h1>
      <div className="p-8">

        <Link to='/create-new-bill' className=" mr-4 rounded-lg border border-transparent px-3 py-2 text-base font-semibold bg-black text-white cursor-pointer transition duration-250 hover:border-indigo-600 ">Create New Bill</Link>
        <Link to='/view-old-bills' className=" mr-4 rounded-lg border border-transparent px-3 py-2 text-base font-semibold bg-black text-white cursor-pointer transition duration-250 hover:border-indigo-600 ">View Old Bills</Link>
        
        
      </div>
      <p className='text-gray-500'>
        Make new bill or view old bills
      </p>
    </div>
  )
}



export default HomePage
