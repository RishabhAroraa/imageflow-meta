import { Outlet } from "react-router-dom";

export default function AppContainer() {
  return (
    <>
      <nav className="fixed">Navbar</nav>
      <Outlet />
    </>
  );
}
