import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HashRouter from "./router/HashRouter.tsx";
import Route from "./router/Route.tsx";
import Home from "./views/Home.tsx";
import User from "./views/User.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Route path="/" element={Home}></Route>
      <Route path="/user" element={User}></Route>
    </HashRouter>
  </React.StrictMode>
);
