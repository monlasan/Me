import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route
          path='*'
          element={
            <div className='w-full text-center min-h-screen bg-gray-100 grid place-items-center'>
              <div>
                <h1 className='text-4xl'>
                  ERROR <span className='text-indigo-800'>404</span>
                </h1>
                <br />
                <p className='text-indigo-800'>There is nothing here :P</p>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
