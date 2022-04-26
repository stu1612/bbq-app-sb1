// npm
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// pages
import Admin from "./pages/Admin";
import AdminCategory from "./pages/AdminCategory";
import AdminProduct from "./pages/AdminProduct";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Product from "./pages/Product";
// components
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
// styles
import "./styles/styles.css";

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
        <Route path="admin" element={<Admin />}>
          <Route path="categoryForm" element={<AdminCategory />} />
          <Route path="productForm" element={<AdminProduct />} />
        </Route>
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
