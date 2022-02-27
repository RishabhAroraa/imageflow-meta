import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

export default function AppContainer() {
    return (
        <>
            <Navbar />
            <div className="pt-14"></div>
            <Outlet />
        </>
    );
}
