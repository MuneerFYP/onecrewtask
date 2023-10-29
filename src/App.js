import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Update your import statement
import Login from "./components/Login";
import Registration from "./components/Registration";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
