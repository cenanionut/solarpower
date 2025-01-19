import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Tehnic from "./pages/Tehnic";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Galerie from "./pages/Galerie";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import Device from "./pages/Device";
import UpdateProfile from "./pages/UpdateProfile";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/tehnic" exact element={<Tehnic />} />
            <Route path="/sign-up" exact element={<Signup />} />
            <Route path="/log-in" exact element={<Login />} />
            {/* Nu merge galeria */}
            <Route path="/galerie" exact element={<Galerie />} />
            {/* Adauga link direct catre Portofoliu */}
            {/* <Route path="/creator" exact element={<Creator />} /> */}
            <Route path="/forgot-password" exact element={<ForgotPassword />} />
            <Route exact path="/device" element={<PrivateRoute />}>
              <Route exact path="/device" element={<Device />} />
            </Route>
            <Route exact path="/update-profile" element={<PrivateRoute />}>
              <Route exact path="/update-profile" element={<UpdateProfile />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
