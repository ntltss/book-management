import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductPage />} exact />
      <Route path="/" element={<HomePage />} exact />
    </Routes>
  );
}

export default App;
