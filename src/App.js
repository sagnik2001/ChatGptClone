import React from "react";
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Menu from "./Components/Menu";
import Imagegenerator from "./Components/Pages/Image_generator";
import QuesAnsgenerator from "./Components/Pages/ques_ans_generator";

const App = () => {
    return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/image_generator" element={<Imagegenerator/>} />
            <Route path="/ques_ans_generator" element={<QuesAnsgenerator/>} />
         </Routes>
      </BrowserRouter>
    )
}

export default App