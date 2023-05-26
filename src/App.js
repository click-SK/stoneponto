import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import EditCalculator from './components/Admin/Calculator/EditCalculator';
import AdminPanel from './components/Admin/AdminPanel';
import {Routes, Route} from 'react-router-dom';
import CalculatorPartner from './components/calculator/CalculatorPartner';
import Test from './components/Test';
import LoginForm from './components/LoginForm';
import { useDispatch } from 'react-redux';
import {fetchCurrency} from './store/currency'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    // .then((res) => res.json())
    // .then((res) => console.log('res',res[24]))
    dispatch(fetchCurrency());
  },[])
  return (
    <div className="App">
            <Header/>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/admin' element={<AdminPanel/>}/>
      <Route path='/calculator' element={<CalculatorPartner/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      </Routes>
      <Test/>
    </div>
  );
}

export default App;
