import { Routes,Route } from 'react-router-dom'
import './App.css'
import { BillForm, HomePage, ViewOldBills, PageNotFound } from './pages/pages'

function App() {

  return (
    <Routes>
      <Route path="/" element = {<HomePage/>} >
        <Route path="home" element={<HomePage/>}/>
      </Route>
      <Route path="/view-old-bills" element={<ViewOldBills/>}/>
      <Route path="/create-new-bill" element={<BillForm/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}



export default App
