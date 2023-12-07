import { useNavigate, Outlet } from "react-router-dom";
function Logon() {
  const navigate = useNavigate();

  const handleFinish = function (val: { username: string; password: string }) {
    navigate("/layout/home");
  };

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
