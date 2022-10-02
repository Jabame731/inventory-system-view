import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Orders from './components/Orders';
import Customers from './components/Customers';
import Inventory from './components/Inventory';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<DashBoard />} />
        <Route path='orders' element={<Orders />} />
        <Route path='customers' element={<Customers />} />
        <Route path='inventory' element={<Inventory />} />
        <Route path='profile' element={<Profile />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
