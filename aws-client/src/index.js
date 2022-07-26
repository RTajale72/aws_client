import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/login';
import SignUp from './components/SignUp/signup';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Items from './components/Items/items';
import About from './components/About/about';
import Home from './components/Home/Home';
import Menu  from './components/Menu/menu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
    <Route exact path="/" element={<App />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/menu" element={<Menu />} />
      <Route exact path="/items" element={<Items />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
    </Routes>
   </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
