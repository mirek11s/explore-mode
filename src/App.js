import React from "react";
import Home from "./pages/Home";
import Layout from "./components/Navbar/Layout";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from "./pages/Explore";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/explore' element={<Explore />} />
      </Routes> 
    </Layout>
  );
};

export default App;
