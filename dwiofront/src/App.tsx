import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
/* 페이지(컴포넌트) import */
import Main from './page/Main';
import NotFound from './page/NotFound';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;