import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/add" element={<Add />} />
        <Route path="/edit:id" element={<Edit />} />
      </Routes>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
