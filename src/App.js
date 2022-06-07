import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom"

import CardsDeatele from './Components/CardsDeatele';
import Cards from './Components/Card';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Cards/>} />
      <Route path='/cart/:id' element={<CardsDeatele/>} />
      </Routes>
    </div>
  );
}

export default App;
