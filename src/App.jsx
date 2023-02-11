import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RoadSign from "./pages/RoadSign";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadsign" element={<RoadSign />} />
      </Routes>
    </Router>
  );
}

export default App;
