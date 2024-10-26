import { Route, Routes } from "react-router-dom";
import FourthProduct from "../../products/fourthProduct";
import ProductSeven from "../../products/fourthProduct/productSeven/index";


export default function FourthProductPage() {
    return (
        <Routes>
            <Route path="/*" element={<FourthProduct />} />
            <Route path="تابلو فرمان هیدرولیک" element={<ProductSeven />} />
        </Routes>
    )
}
