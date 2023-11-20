import { HashRouter, Route, Routes, Link, Navigate } from "react-router-dom";
// import "./App.css";
import Layout from "./views/layout";
import Login from "./views/login";
import Home from "./views/Home";
import User from "./views/User";

import GetRouters from "./router";

function App() {
  return (
    <div>
      <HashRouter>
        <GetRouters />
      </HashRouter>
    </div>
  );
}

export default App;
