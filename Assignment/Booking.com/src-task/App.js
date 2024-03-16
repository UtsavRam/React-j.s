import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookinginput from './Bookinginput';
import Imagegallry from './Imagegallry';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App()
{    
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Bookinginput/>}></Route>
            <Route path='/img' element={<Imagegallry/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;