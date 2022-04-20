
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

function App() {
  return (


    <BrowserRouter>
 
    { <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signUp' element={<SignUp/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
     
     }
        </BrowserRouter>
    
  );
}

export default App;
