// npm
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
// components
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:title" element={<Category />} />

        <Route path="menu/:title/:name" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={<Admin />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
