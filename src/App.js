import { Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
function App() {
  return (
    <div>
      <Routes>
       <Route path="/" element={<LayoutPage />}/>
      </Routes>
    </div>
  );
}

export default App;
