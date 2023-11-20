import { Outlet, Link } from "react-router-dom";
import "./layout.scss";

function Layout() {
  return (
    <section id="container">
      <aside>
        <div>
          <Link to="/layout">控制台</Link>
        </div>
        <div>
          <Link to="/layout/user">用户</Link>
        </div>
      </aside>
      <section>
        <header>header</header>
        <main>
          <Outlet></Outlet>
        </main>
      </section>
    </section>
  );
}

export default Layout;
