import './App.css';
import Navbar from './components/Navbar';
import FormInput from './components/FormInput';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CareerServices from './pages/CareerServices';
import CoronaBanner from './components/CoronaBanner';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<><CoronaBanner /><Home /></>}></Route>

          <Route path='/careerServices' element={<CareerServices />}></Route>

          <Route path='/requestForm' element={<FormInput />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
