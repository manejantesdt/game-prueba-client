import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Salon } from "./components/Salon";
import { NavBar } from "./components/NavBar";
import { EditPlayer } from "./components/EditPlayer";
import { CreatePlayer } from "./components/CreatePlayer";
import { About } from "./components/About";
import NotFound from "./components/NotFound";
import {Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/edit" element={<EditPlayer />} />
        <Route path="/create" element={<CreatePlayer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Link to="/about">About</Link>
    </BrowserRouter>
  );
}

export default App;
