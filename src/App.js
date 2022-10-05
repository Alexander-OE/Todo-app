import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoutes";
import LayoutPage from "./pages/LayoutPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <LayoutPage />
            </ProtectedRoute>
          }
        />

        <Route path="/todo" element={<LayoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
