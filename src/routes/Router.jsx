import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginPage } from "../pages/Login";
import Footer from "../components/Footer"
import WelcomePage from "../pages/WelcomePage";
const Router = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? <Navigate to="/welcome" replace /> : <LoginPage />
        }
      />
      <Route
        path="/welcome"
        element={
          isLoggedIn ? (
            <>
              <WelcomePage />
              <Footer />
            </>
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
