import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import EditCalculator from './components/Admin/Calculator/EditCalculator';
import {Routes, Route} from 'react-router-dom';
import CalculatorPartner from './components/calculator/CalculatorPartner';

function App() {
  return (
    <div className="App">
            <Header/>
      <Routes>
      <Route path='/' element={<CalculatorPartner/>}/>
      <Route path='/admin' element={<EditCalculator/>}/>
      </Routes>
    </div>
  );
}

export default App;
