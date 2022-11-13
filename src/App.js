import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Top.jsx";
import Footer from "./components/Footer";
import "./App.css";
import TodoList from "./components/TodoList.jsx";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<TodoList/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
