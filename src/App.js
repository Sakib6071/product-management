import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import Manage from './Components/Manage/Manage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add-product' element={<AddProduct></AddProduct>}></Route>
        <Route path='/manage' element={<Manage></Manage>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
