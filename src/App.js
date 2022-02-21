import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About.jsx";
import {Home} from "./pages/Home";
import {Footer} from "./components/Footer";
import { Provider } from "react-redux";
import { DetailPlayer } from "./pages/DetailPlayer";
import { CreatePlayer } from "./pages/CreatePlayer";
import  {NavBar}  from "./components/NavBar";
import  {SearchPlayer}  from "./pages/SearchPlayer";
import {NotFound} from "./pages/NotFound";
import { TestDetailPlayer } from "./tests/TestDetailPlayer"
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
        <Route path="/test/:id" element={<TestDetailPlayer  props={true} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>  
      <Footer />  
  </Provider>
);


export default App;  
