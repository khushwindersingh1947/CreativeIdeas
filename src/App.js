import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, List } from "./Pages";

function App() {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/List" element={<List />} />
          </Routes>
      </div>
  );
}

export default App;
