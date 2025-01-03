import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
// import DragPage from './Components/DragPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            {/* <Route path='/select-page' element={<SelectPlace/>}/> */}
            {/* <Route path='/drag-place' element={<DragPage/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
