import './css/App.css'
import MovieCard from './components/MovieCard'
import Favourite from './pages/Favorite'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import Favorite from "./pages/Favorite";

function App() {

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/favorites" element={<Favorite />}/> 
        </Routes>
      </main>
    </div>
  ); 
}

export default App;
 
