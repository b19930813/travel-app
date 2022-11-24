import React from 'react';
import './App.css';
import Main from './Component/Page/main';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Bar from './Component/Frame/bar'


function App() {
  return (
    <div >
      <Bar />
      <div className="MyApp">
        <BrowserRouter>
          <Routes  >
            <Route path="/" element={<Main />} />


          </Routes  >
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
