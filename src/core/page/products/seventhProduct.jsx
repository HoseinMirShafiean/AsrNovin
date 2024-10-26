import { Route, Routes } from "react-router-dom";
import SeventhProduct from '../../products/seventhProduct/index';
import ProductNine from "../../products/seventhProduct/productNine/index";


export default function SeventhProductPage() {
    return (
        <Routes>
            <Route path="/*" element={<SeventhProduct />} />
            <Route path="موتور گیرلس CEG ساخت اسپانیا" element={<ProductNine />} />
        </Routes>
    )
}
