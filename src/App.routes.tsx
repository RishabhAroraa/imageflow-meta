import { Routes, Route } from "react-router-dom";


import AppContainer from "./AppContainer";

import Landing from "./Pages/Landing/Landing.page";
import Login from "./Pages/Login/Login.page";
import Gallery from "../src/Pages/Gallery/Gallery.page";
import Profile from "./Pages/Profile/Profile.page";
import Signup from "./Pages/Signup/Signup.page";

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route index element={<Landing />} />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="gallery" element={<Gallery />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
  );
}
