import HomePage from "./pages/home";
import CheckOut from "./pages/checkout/CheckOut";
import Layout from "./pages/layout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllProducts from "./pages/allProducts/AllProducts";
import Admin from "./pages/admin/Admin";
import { TbArrowBack } from "react-icons/tb";

const ThankYouPage = () => {
  return (
    <div className="bg-gray-50 flex items-center flex-col justify-center h-screen">
      <div className="mb-8">Cảm ơn bạn đã đặt hàng ^_^ ^_^</div>

      <Link to={"/"} className="hover:bg-gray-300 px-4 py-2">
        Trở lại trang chính <TbArrowBack className="inline-block -translate-y-1"/>
      </Link>
    </div>
  );
};

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
          <Route index element={<AllProducts />}></Route>
        </Route>
        <Route path="/admin">
          <Route index element={<Admin />}></Route>
        </Route>
        <Route path="/thankyou" element={<ThankYouPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
