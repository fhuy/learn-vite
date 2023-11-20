import { HashRouter, Route, Routes, Link, Navigate } from "react-router-dom";
// import "./App.css";
import Layout from "./views/layout";
import Login from "./views/login";
import Home from "./views/Home";
import User from "./views/User";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/layout" element={<Layout />}>
            {/* 默认挂载index路由 */}
            <Route index element={<Home />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
