import { Route, Routes } from "react-router-dom";
import FirstProduct from "../../products/firstProduct";
import ProductOne from "../../products/firstProduct/productOne/index";


export default function FirstProductPage() {
    return (
        <Routes>
            <Route path="/*" element={<FirstProduct />} />
            <Route path="نجات اضطراری آسانسور UPS" element={<ProductOne />} />
        </Routes>
    )
}
