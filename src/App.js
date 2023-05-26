import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import EditCalculator from './components/Admin/Calculator/EditCalculator';
import {Routes, Route} from 'react-router-dom';
import CalculatorPartner from './components/calculator/CalculatorPartner';
import Test from './components/Test';
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
      <Route path='/admin' element={<EditCalculator/>}/>
      <Route path='/calculator' element={<CalculatorPartner/>}/>
      </Routes>
      <Test/>
    </div>
  );
}

export default App;
