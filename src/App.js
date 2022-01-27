import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Provider } from "react-redux";
import { EditPlayer } from "./components/EditPlayer";
import { CreatePlayer } from "./components/CreatePlayer";
import NotFound from "./components/NotFound";
import store from "./store/store";
import "./styles/styles.scss";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/edit" element={<EditPlayer />} />
    <Route path="/create" element={<CreatePlayer />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  </Provider>

  );


export default App;  
