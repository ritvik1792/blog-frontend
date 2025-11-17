import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import store from "./store";
import { stables } from "./constants";

console.log("Environment Variable:", process.env.REACT_APP_API_BASE_URL);
axios.defaults.baseURL = stables.API_BASE_URL;
console.log("API Base URL:", axios.defaults.baseURL);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
