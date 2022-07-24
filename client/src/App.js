import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "./App.css";
import NewTrip from "./pages/NewTrip";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/newtrip" element={<NewTrip />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
