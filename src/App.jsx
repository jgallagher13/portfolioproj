import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';
import { data } from './data';
import NavBar from './components/NavBar/NavBar';
import './App.css'

export default function App() {

  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/portfolioproj" element={<Header data={data}/>} />
          <Route path="/about" element={<About data={data}/>} />
          <Route path="/projects" element={<Projects data={data}/>} />
        </Routes>
        <Footer data={data}/>
      </div>
      </>
    
  )
}


