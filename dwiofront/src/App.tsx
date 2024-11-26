import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/header/Header';
/* 페이지(컴포넌트) import */
import Main from './page/main/Main';
import Contact from './page/contact/Contact';
import Notice from './page/notice/Notice';

function App() {
  const url = "DownloadWholeInOne/";
  return (
      <div>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path={url} element={<Main/>}/>
                  <Route path={url + "Notice"} element={<Notice/>}/>
                  <Route path={url + "Contact"} element={<Contact/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;