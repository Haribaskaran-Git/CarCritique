import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from './pages/Reviews';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Reviews" element={<Reviews/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
