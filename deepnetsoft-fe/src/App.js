import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Menu from './Menu';
import Drinks from './Drinks';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Brunch from './Brunch';


function App() {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Drinks />} />
          <Route path='/brunch' element={<Brunch />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
