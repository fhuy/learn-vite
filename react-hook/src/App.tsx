import { HashRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Layout from "./views/layout";
import Login from "./views/login";
import Home from "./views/Home";
import User from "./views/User";

function App() {
  return (
    <div>
      <HashRouter>
        <Link to="/login">登录</Link>
        <Link to="/login/user">用户页</Link>
        <Routes>
          <Route path="/login" element={<Login />}>
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
