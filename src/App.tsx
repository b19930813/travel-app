import React from 'react';
import './App.css';
import Main from './Page/main';
import Test from './Page/test'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Bar from './Component/Frame/bar'
import Container from '@mui/material/Container';

function App() {
  return (
    < >
      <Bar />
      <Container fixed>
       
        <BrowserRouter>
          <Routes  >
            <Route path="/" element={<Main />} />
            <Route path="/test" element={<Test />} />

          </Routes  >
        </BrowserRouter>
        </Container>


    </>
  );
}

export default App;
