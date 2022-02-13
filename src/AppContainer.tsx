import { Outlet } from "react-router-dom";

export default function AppContainer() {
  return (
    <>
      <nav>Navbar</nav>
      <Outlet />
    </>
  );
}
