import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Project from './pages/Project';
import EditProfile from './pages/EditProfile';
import ResetPassword from './pages/ResetPassword';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import PaymentPage from'./pages/PaymentPage';
import UploadImage from './pages/uploadImage';
import Dashboard from './pages/Dashboard';
import Authentification from './pages/Authentification';
import Storage from './pages/Storage';
import ApiGen from './pages/ApiGen';
import Extensions from './pages/Extensions';
import Products from './pages/Products';
import Mailing from './pages/Mailing';

{/* <Route exact path='/' component={Home}/> */}
function App() {

  const isLoggedIn=window.localStorage.getItem("isLoggedIn");

  return (
  <div className="wrapper">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={ isLoggedIn=="true" ? <Home/> : <Login/>}/>
        <Route exact path="/signup" element={isLoggedIn=="true" ? <Home/> : <Signup/>}/>
        <Route exact path="/project" element={isLoggedIn=="true"? <Project/>:<Login/>}/>
        <Route exact path="/upload-image" element={isLoggedIn=="true"? <UploadImage/>:<Login/>}/>
        <Route exact path="/edit-profile" element={isLoggedIn=="true"? <EditProfile/>:<Login/>}/>
        <Route exact path="/reset-password" element={isLoggedIn=="true"? <Home/>:<ResetPassword/>}/>
        <Route exact path="/pricing" element={<Pricing/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/payment" element={<PaymentPage/>}/>
        <Route path="*" element={<h1>404: Not Found</h1>}/>

        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/authentification" element={<Authentification />} />
        <Route exact path="/storage" element={<Storage />} />
        <Route exact path="/apigene" element={<ApiGen />} />
        <Route exact path="/extensions" element={<Extensions />} />
        <Route exact path="/mailing" element={<Mailing />} />
        <Route exact path="/products" element={<Products />} />


      


      </Routes>
    </Router>
  </div>

  );
}

export default App;
