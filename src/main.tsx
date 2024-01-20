import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HashRouter from "./router/HashRouter.tsx";
import Route from "./router/Route.tsx";
import Home from "./views/Home.tsx";
import User from "./views/User.tsx";
import Redirect from "./router/Redirect.tsx";
import Switch from "./router/Switch.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/user" element={<User />} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  </React.StrictMode>
);
