import Home from "./pages/Home";
import Login from "./pages/Login";
import Review from "./pages/Review";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Review" element={<Review/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
