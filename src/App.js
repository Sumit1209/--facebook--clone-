import React from "react";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Home from "./Home.js";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
   <>
   <div className="App">
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>

       </Routes>
    </BrowserRouter>
   </div>
   </>
  );
}

export default App;
