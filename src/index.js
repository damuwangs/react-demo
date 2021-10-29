/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-10-28 14:35:33
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Test from './test';

function App() {
  return (
    <div className="App">
      <Test/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);