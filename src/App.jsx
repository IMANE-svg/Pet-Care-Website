import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import HomePage from "./components/HomePage";
import PetShop from "./components/PetShop";
import PetAdoption from "./components/PetAdoption";

import Chatbot from "./components/Chatbot";

const App = () => {
  const [user, setUser] = useState(null); // Tracks authenticated user

  return (
    <Router>
      <Routes>
        {/* Render Auth if user is not logged in */}
        {!user ? (
          <Route path="/" element={<Auth setUser={setUser} />} />
        ) : (
          <>
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/shop" element={<PetShop />} />
            <Route path="/adoption" element={<PetAdoption />} />
            
            <Route path="/guide" element={<Chatbot />}/>
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;