import { Link } from "react-router-dom"

function HomePage() {

  return (

    <div className="homepage-container bg-gray-800 min-h-screen">
      <div>
        <div className='homepage-container'> <img src='src\assets\react.svg' className="h-24 mb-8"/> </div>
      
        <h1 className='text-6xl leading-tight text-white' >Ultimate Electro Enterprises</h1>
        <div className='homepage-container p-10'>
          <Link to='/bills/create-new-bill/customer-info' className=' mr-4 rounded-lg border border-transparent px-3 py-2 text-base font-semibold bg-black text-white cursor-pointer transition duration-250 hover:border-indigo-600 hover:text-indigo-600 '>Create New Bill</Link>
          <Link to='/bills/view-old-bills'  className=' mr-4 rounded-lg border border-transparent px-3 py-2 text-base font-semibold bg-black text-white cursor-pointer transition duration-250 hover:border-indigo-600 hover:text-indigo-600 '>View Old Bills</Link>
        </div>
        <h1 className='homepage-container text-white'>Make or view bills</h1>
      </div>
    </div>

  )
}



export default HomePage


