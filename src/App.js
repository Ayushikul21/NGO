import { Routes, Route } from "react-router-dom";
import NGOWebsite from "./Components/NGOWebsite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NGOWebsite />} />
      </Routes>
    </>
  );
}

export default App;
