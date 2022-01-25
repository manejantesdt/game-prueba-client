import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Ranking } from "./components/Ranking";
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
