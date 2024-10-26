import { Route, Routes } from "react-router-dom";
import ThirdProduct from "../../products/thirdProduct";
import ProductFive from '../../products/thirdProduct/ProductFive/index';
import ProductFour from "../../products/thirdProduct/productFour/index";
import ProductSix from "../../products/thirdProduct/productSix/index";
import ProductThree from "../../products/thirdProduct/productThree/index";


export default function ThirdProductPage() {
    return (
        <Routes>
            <Route path="/*" element={<ThirdProduct />} />
            <Route path="تابلو فرمان مدل KAMPAK" element={<ProductThree />} />
            <Route path="تابلو فرمان مدل NETLIFT" element={<ProductFour />} />
            <Route path="تابلو فرمان مدل QUICK" element={<ProductFive/>} />
            <Route path="تابلو فرمان مبدل دو سرعته به درایودار VVVF" element={<ProductSix />} />
        </Routes>
    )
}
