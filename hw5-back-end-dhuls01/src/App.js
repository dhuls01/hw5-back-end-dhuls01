import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import './App.css';
import Register from "./Register";
import Home from "./Home";
import View from "./View";
import Header from "./components/Header";
import Login from "./Login";


function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <ToastContainer position="top-center"/>
       
          <Routes>
              <Route path= '/' element={<Home/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/view/:id' element={<View/>}/>
              <Route path= '/update/:id' element={<Register/>}/>
              <Route path='/login' element={<Login/>}></Route>
          </Routes>
        
    </div>
    </Router>
  );
}

export default App;
