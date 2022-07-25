import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "./App.css";
import NewTrip from "./pages/NewTrip";
import Checklist from "./pages/Checklist";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/newtrip" element={<NewTrip />} />
            <Route path="/checklist" element={<Checklist />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
