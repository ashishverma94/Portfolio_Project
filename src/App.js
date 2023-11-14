import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path = "about" element = {<About />}></Route>
          <Route path = "contact" element = {<Contact />}></Route>
          <Route path = "projects" element = {<Projects/>}></Route>
        </Route>
        
      </Routes>
    </>



  );
}

export default App;
