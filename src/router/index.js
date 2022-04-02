import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Detail from "./Detail";
import List from "./List";

export default function BaseRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/list" element={<List />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
