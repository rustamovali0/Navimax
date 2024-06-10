import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Components/Pages/Home';
import Features from './Components/Pages/Features';
import Testimonials from './Components/Pages/Testimonials';
import Blog from './Components/Pages/Blog';
import Contact from './Components//Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route  path="/Features" element={<Features />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
