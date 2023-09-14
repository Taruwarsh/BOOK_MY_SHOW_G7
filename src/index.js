import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import MovieProvider from "./Context/MovieContext";
import {store} from './Reducers/store.jsx'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);
