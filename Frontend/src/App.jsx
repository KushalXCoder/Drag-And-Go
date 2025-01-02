import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
// import DragPage from './Components/DragPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/select-page' element={<SelectPlace/>}/> */}
            {/* <Route path='/drag-place' element={<DragPage/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
