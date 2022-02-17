import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { About } from "./components/About";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";
import { Provider } from "react-redux";
import { DetailPlayer } from "./components/DetailPlayer";
import { CreatePlayer } from "./components/CreatePlayer";
import  {NavBar}  from "./components/NavBar";
import  {SearchPlayer}  from "./components/SearchPlayer";
import {NotFound} from "./components/NotFound";
import store from "./store/store";

const App = () => (
  <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/id/:id" element={<DetailPlayer />} />
        <Route path="/create" element={<CreatePlayer />} />
        <Route path="/search" element={<SearchPlayer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>  
      <Footer />  
  </Provider>
);


export default App;  
