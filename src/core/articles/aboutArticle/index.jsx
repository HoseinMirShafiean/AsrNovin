import { Grid } from "rsuite";
import Footer from "../../footer/footer";
import NavBar from "../../header/navBar";
import AboutCard from "./aboutCard";
import ImageBox from "./imageBox";

export default function AboutArticle() {
    return (
        <Grid container>
            <Grid item>
                <NavBar />
            </Grid>
            <Grid Item>
                <ImageBox />
            </Grid>
            <Grid Item>
                <AboutCard />
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>

    )
}
