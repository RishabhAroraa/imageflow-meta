import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    function handleLogin(event: SyntheticEvent) {
        event.preventDefault();
        navigate("/login");
    }

    function handleSignup(event: SyntheticEvent) {
        event.preventDefault();
        navigate("/signup");
    }

    return (
        <nav className="fixed bg-[#FFBD59] p-4 flex w-full text-white items-center justify-between font-bold">
            <div>ImageFlow META</div>
            <div className="flex">
                <div className="mr-4" onClick={handleLogin}>
                    Log In
                </div>
                <div onClick={handleSignup}>Sign Up</div>
            </div>
        </nav>
    );
}
