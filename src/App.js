import HomePage from "./pages/home";
import CheckOut from "./pages/checkout/CheckOut";
import Layout from "./pages/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/allProducts/AllProducts";
import Admin from "./pages/admin/Admin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/allproducts" element={<Layout />}>
          <Route index element={<AllProducts/>}></Route>
        </Route>
        <Route path="/admin" element={<Admin/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
