import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Singin' element={<SignIn/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
