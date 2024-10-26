import { Route, Routes } from "react-router-dom";
import AboutArticle from '../../articles/aboutArticle/index';
import AboutArticleTow from '../../articles/aboutAticleTwo/index';
import Articles from '../../articles/index';

export default function ArticlesPage() {

    return (
        <Routes>
            <Route path="/*" element={<Articles />} />
            <Route path="استانداردهای پله برقی" element={<AboutArticle />} />
            <Route path="آیا سقوط آسانسور امکان پذیر است؟" element={<AboutArticleTow />} />
        </Routes>
    )
}