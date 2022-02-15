//  import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./store/store";

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById("root")
// );
// _____________________________________________________
 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./styles/GlobalStyled";

ReactDOM.render(
  <React.StrictMode>
  <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


