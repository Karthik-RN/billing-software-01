import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import reactLogo from '/react.svg'

function BillHeader() {

  return (
    <header className="shadow sticky z-50 top-0">
        <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                     <img
                        src={reactLogo}
                        className="mr-3 h-12"
                        alt="Logo"
                    /> 
                    
                </Link>
                <div className="flex items-center lg:order-2">
                    <Link
                        to="/bills/view-old-bills"
                        className="text-white hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-200 font-bold hover:text-black rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Preview
                    </Link>
                    <Link
                        to="/bills/view-old-bills"
                        className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-200 font-bold hover:text-black rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Print
                    </Link>
                </div>
                <div
                    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink
                                to='/bills/create-new-bill/customer-info'
                                className={( { isActive } ) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${ isActive ? "text-indigo-600" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-indigo-600 lg:p-0`
                                }
                            >
                                Customer Information
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink
                                to='/bills/create-new-bill/billing-info'
                                className={( { isActive } ) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${ isActive ? "text-indigo-600" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-indigo-600 lg:p-0`
                                }
                            >
                                Billing Information
                            </NavLink>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );

  // return (
  //   <div className='header-container bg-green-800 '>
      
  //     <div className='header-logo'>
  //       <img src='src\assets\react.svg' height={1000}/>
  //     </div>
  //     <div className='header-nav-buttons'>
  //         <button className=' mr-4 rounded-lg border border-transparent px-3 py-2 text-base font-semibold bg-black text-white cursor-pointer transition duration-250 hover:border-indigo-600 hover:text-indigo-600 ' >Customer Details</button>
  //         <button className=' mr-4 rounded-lg border border-transparent px-3 py-2 text-base font-semibold bg-black text-white cursor-pointer transition duration-250 hover:border-indigo-600 hover:text-indigo-600 ' >Bill Details</button>
  //     </div>
  //     <div className='header-print-buttons'>
  //       <button>Preview</button>
  //       <button>Print</button>
  //     </div>
      
  //   </div>
  // )
}

export default BillHeader


