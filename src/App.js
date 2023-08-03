import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Footer, Home, About } from "./routes/Routes.js";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
