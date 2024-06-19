import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'
import Employees from './Employees';
import CreateEmployee from './CreateEmployee';
import UpdateEmployee from './UpdateEmployee';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employees/>} />
          <Route path='/create' element={<CreateEmployee/>} />
          <Route path='/update' element={<UpdateEmployee/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
