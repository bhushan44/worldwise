import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import Product from "./pages/Product";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>

          <Route path="pricing" element={<Pricing></Pricing>}></Route>
          <Route path="login" element={<Login></Login>}></Route>

          <Route path="product" element={<Product></Product>}></Route>
          <Route path="app" element={<AppLayout></AppLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
