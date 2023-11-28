import { Routes, Route, } from "react-router-dom"
import Home from "./Home"
import ErcKinshasa from "./pages/ercKinshasa";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/ercKinshasa" element={<ErcKinshasa />} />
      </Routes>
    </>
  );
};

export default App;
