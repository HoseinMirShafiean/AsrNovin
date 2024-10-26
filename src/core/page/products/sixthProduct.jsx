import { Route, Routes } from "react-router-dom";
import SixthProduct from "../../products/sixthProduct";
import ProductEight from "../../products/sixthProduct/productEight/index";


export default function SixthProductPage() {
    return (
        <Routes>
            <Route path="/*" element={<SixthProduct />} />
            <Route path="جعبه ریویزیون سریال" element={<ProductEight />} />
        </Routes>
    )
}
