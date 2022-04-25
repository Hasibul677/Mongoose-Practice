import './App.css';
import { Navigate, Routes, Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
