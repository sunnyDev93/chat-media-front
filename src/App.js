import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Price from "./admin/Price";
import { Modal } from "./components";
import { Footer, Header } from "./layout";
import {
  Cancel,
  ChatMedia,
  // ChatMedia,
  Home,
  Login,
  Main,
  Plan,
  PrivateRoute,
  Register,
  Success,
  UserProfile,
} from "./pages";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const className = isModalOpen ? " blur-sm" : "";
  return (
    <>
      <div
        className={className}
        style={{
          fontFamily: "Segoe UI",
          backgroundColor: "#FFFFFF0D!important",
        }}
      >
        <BrowserRouter>
          <Header isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
          <div id="recaptcha-container"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/success" element={<Success />} />
            <Route
              path="/chatmedia"
              element={
                <PrivateRoute>
                  <Main />
                </PrivateRoute>
              }
            />
            <Route
              path="/chatmedia/chat"
              element={
                <PrivateRoute>
                  <ChatMedia />
                </PrivateRoute>
              }
            />
            <Route
              path="/price"
              element={
                <PrivateRoute>
                  <Price />
                </PrivateRoute>
              }
            />
            <Route
              path="/plan"
              element={
                <PrivateRoute>
                  <Plan />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <UserProfile payProcess="success" />
      </Modal>
    </>
  );
}

export default App;
