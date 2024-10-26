import { Outlet, Route, Routes } from "react-router-dom";
import Products from "../../products";
import FifthProduct from "../../products/fifthProduct";
import FirstProductPage from "./firstProduct";
import FourthProductPage from "./fourthProduct";
import SecondProductPage from "./secondProduct";
import SeventhProductPage from "./seventhProduct";
import SixthProductPage from "./sixthProduct";
import ThirdProductPage from "./ThirdProduct";

export default function ProductPage() {
  return (
    <div>
        <Outlet/>
    
    <Routes>
      <Route path="/*" element={<Products />} />
      <Route path="برق اضطراری آسانسور/*" element={<FirstProductPage />} />
      <Route path="پکیج کامل آسانسور/*" element={<SecondProductPage />} />
      <Route path="تابلوی فرمان آسانسور های کششی/*" element={<ThirdProductPage />} />
      <Route path="تابلوی فرمان آسانسور های هیدرولیک/*" element={<FourthProductPage />} />
      <Route path="سیستم کنترل آسانسور/*" element={<FifthProduct />} />
      <Route path="لوازم جانبی آسانسور/*" element={<SixthProductPage />} />
      <Route path="موتور آسانسور/*" element={<SeventhProductPage />} />

    </Routes>
    </div>
  );
}
