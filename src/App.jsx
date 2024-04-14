import { Routes,Route } from 'react-router-dom'
import './App.css'
import { BillForm, HomePage, ViewOldBills, PageNotFound, CustomerForm } from './pages/pages'
import BillLayout from './layouts/BillLayout'
function App() {

  return (
    <Routes>

      <Route path="/" element = {<HomePage/>} >
        <Route path="home" element={<HomePage/>}/>
      </Route>

      <Route path="bills" element={<BillLayout/>}>

        <Route path="create-new-bill" >
          <Route path="customer-info" element={<CustomerForm/>}/>
          <Route path="billing-info" element={<BillForm/>}/>
        </Route>

        <Route path="view-old-bills" element={<ViewOldBills/>}/>
      </Route>
      <Route path='*' element={<PageNotFound/>}/>

    </Routes>
  )

}

export default App

