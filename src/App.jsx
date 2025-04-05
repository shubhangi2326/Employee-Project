import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './component/AddEmployee';
import EmployeeList from './component/EmployeeList';
import Navbar from './component/Navbar';
import UpdateEmployee from './component/UpdateEmployee'
function App() {

  return (
    <>
   <Navbar/>
   <BrowserRouter>
   <Routes>
   
   <Route path="/" element={<EmployeeList/>}></Route>
    <Route path="/addEmployee" element={<AddEmployee/>}></Route>
    <Route path="/editEmployee/:id" element={<UpdateEmployee/>}></Route>

   </Routes>
   </BrowserRouter>

    </>
  )
}

export default App
