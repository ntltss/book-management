import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";
import MyCardList from "./components/pages/MyCardList";

function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cards" element={<MyCardList />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
