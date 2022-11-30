import React from 'react';
import './App.css';
import Layout from "./Component/Frame/Layout";
import Main from "./Page/Main";
import MainDetail from "./Page/MainDetail";
import Login from "./Page/Login";
import Notfound from "./Page/Notfound";
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    < >
    {/* 路由表 */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="login" element={<Login/>}></Route>
          <Route index element={<Main/>}></Route>

          {/*動態路由*/}
          <Route path=":Id" element={<MainDetail/>}></Route> 
          
          {/* 錯誤頁面 */}
          <Route path="*" element={<Notfound/>}></Route>       

        </Route>

      </Routes>
    </>
  );
}

export default App;
