import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./layout";
import { ChatMedia, Home, Login, PrivateRoute, Register } from "./pages";

function App() {
  return (
    <div className="bg-black ">
      <BrowserRouter>
        <Header />
        <div id="recaptcha-container"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/chatmedia"
            element={
              <PrivateRoute>
                <ChatMedia />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
