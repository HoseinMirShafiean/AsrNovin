import { Route, Routes } from "react-router-dom";
import SecondProduct from "../../products/secondProduct";
import ProductTwo from "../../products/secondProduct/productTwo/index";


export default function SecondProductPage() {
    return (
        <Routes>
            <Route path="/*" element={<SecondProduct />} />
            <Route path="پکیج کامل آسانسور" element={<ProductTwo />} />
        </Routes>
    )
}
