import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import '../src/style/component.css';
import '../src/style/main.css';
import LoadingPage from './component/loadingPage';
import AboutPage from './core/page/about';
import AfterSaleservicePage from './core/page/afterSaleservice';
import ArticlesPage from './core/page/articles';
import DownloadPage from './core/page/download';
import HomePage from './core/page/homePage';
import ProductPage from './core/page/products';

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="products/*" element={<ProductPage />} />
          <Route path="about/*" element={<AboutPage />} />
          <Route path="articles/*" element={<ArticlesPage />} />
          <Route path="download/*" element={<DownloadPage />} />
          <Route path="afterSaleService/*" element={<AfterSaleservicePage />} />

        </Routes>
      </Suspense>
    </HashRouter>
  );
}
export default App;

{/* 
          <Route path="/productOne" element={<ProductOne />} />
          <Route path="/productTwo" element={<ProductTwo />} />
          <Route path="/productThree" element={<ProductThree />} />
          <Route path="/productFour" element={<ProductFour />} />
          <Route path="/productFive" element={<ProductFive />} />
          <Route path="/productSix" element={<ProductSix />} />
          <Route path="/productSeven" element={<ProductSeven />} />
          <Route path="/productEight" element={<ProductEight />} />
          <Route path="/productNine" element={<ProductNine />} /> */}
