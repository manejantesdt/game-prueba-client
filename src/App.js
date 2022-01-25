import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Salon } from "./components/Salon";
import { NavBar } from "./components/NavBar";
import { EditPlayer } from "./components/EditPlayer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/edit" element={<EditPlayer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
