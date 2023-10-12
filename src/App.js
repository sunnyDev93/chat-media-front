import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Modal } from "./components";
import { Footer, Header } from "./layout";
import {
  ChatMedia,
  Home,
  Login,
  PrivateRoute,
  Register,
  UserProfile,
} from "./pages";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const className = isModalOpen ? "bg-black blur-sm" : "bg-black";
  return (
    <>
      <div className={className}>
        <BrowserRouter>
          <Header isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
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
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <UserProfile />
      </Modal>
    </>
  );
}

export default App;
