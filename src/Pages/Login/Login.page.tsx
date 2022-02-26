export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-lg border rounded-md text-left p-6">
                <form action="">
                    <div className="text-3xl mb-6 text-center">Login</div>
                    <div className="mb-4">
                        <label htmlFor="emailID">Email ID: </label> <br />
                        <input
                            type="text"
                            name="emailID"
                            className="border border-1 border-gray-400 text-xl mt-2 rounded-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label> <br />
                        <input
                            type="password"
                            name="password"
                            className="border border-1 border-gray-400 text-xl mt-2 rounded-sm"
                        />
                    </div>
                    <div className="mt-2 text-sm">forgor 💀 password? </div>
                    <button type="submit" className="text-xl border mt-4">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}
