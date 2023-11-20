import { Outlet } from "react-router-dom";
function Logon() {
  return (
    <div>
      <div>login</div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Logon;
