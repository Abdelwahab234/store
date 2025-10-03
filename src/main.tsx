import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./componants/nav.tsx";
import App from "./App.tsx";
import Products from "./componants/cards.tsx";
import About from "./componants/about.tsx"

import ProductDetails from "./componants/ProductDetails.tsx";
import "./index.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App/>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
      <About/>
  </StrictMode>
);
