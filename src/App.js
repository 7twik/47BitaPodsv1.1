import './App.css';
import { Routes, Route } from "react-router-dom";
//import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage"
import WorkPlaces from './Pages/WorkPlaces/WorkPlaces';
import Blog from './Pages/Blog/Blog';
import AddBlog from './Pages/AddBlog/AddBlog';
//import Pblog from './Pages/Pblog/Pblog';
import Contact from './Pages/Contact/Contact';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/workplaces" element={<WorkPlaces />}/>
            <Route exact path="/blog" element={<Blog />}/>
            <Route exact path="/AddBlog" element={<AddBlog />}/>
            <Route exact path="/contact" element={<Contact />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
