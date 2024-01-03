import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import Product from "./pages/Product";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { ContextProvider } from "./contexts/CityContext";
export default function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>

            <Route path="pricing" element={<Pricing></Pricing>}></Route>
            <Route path="login" element={<Login></Login>}></Route>

            <Route path="product" element={<Product></Product>}></Route>
            <Route path="app" element={<AppLayout></AppLayout>}>
              <Route
                index
                element={<Navigate replace to="cities"></Navigate>}
              ></Route>
              <Route path="cities" element={<CityList></CityList>}></Route>
              <Route path="cities/:id" element={<City></City>} />
              <Route path="countries" element={<CountryList></CountryList>} />
              <Route path="form" element={<Form></Form>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}
