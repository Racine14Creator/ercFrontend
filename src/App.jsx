import { Routes, Route, } from "react-router-dom";
import Home from "./Home";
import ErcKinshasa from "./pages/ercKinshasa";
import Admin from "./pages/Admin";


const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/ercKinshasa" element={<ErcKinshasa />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
