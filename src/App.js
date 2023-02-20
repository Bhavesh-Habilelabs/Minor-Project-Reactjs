import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/index'
import Gallery from './pages/gallery'
import Favourite from './pages/favourite'
import NavBar from './components/header'

function App() {

  return (
    <div className="main-container">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="gallery" element={<Gallery />} />
          <Route exact path="favourite" element={<Favourite />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
