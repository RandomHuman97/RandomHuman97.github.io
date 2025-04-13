import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import Home from "./pages/home/home";
import "./index.css"
import Posts from "./pages/posts/posts";
import RenderPost from "./pages/renderpost/renderpost";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/posts" element={<Posts/>} />
      <Route path="/posts/:postName" element={<RenderPost />} />
    </Routes>
  </HashRouter>
);
