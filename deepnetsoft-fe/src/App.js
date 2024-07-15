import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Menu from './Menu';
import Drinks from './Drinks';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Drinks />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
