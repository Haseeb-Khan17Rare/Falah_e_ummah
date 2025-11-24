import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Hero/Home.tsx";
import Donations from './components/Donations/Donations.tsx';
function App() {  
  return (
    <BrowserRouter>
      {/* Navbar should stay outside Routes */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Donations Page */}
        <Route path="/Donations" element={<Donations />} />

        
     </Routes>
    </BrowserRouter>
  );
}

export default App;
