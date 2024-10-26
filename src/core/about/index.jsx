import { Grid } from "rsuite";
import Footer from "../footer/footer";
import NavBar from "../header/navBar";
import AboutAccordion from "./aboutAccordion";
import ImageBox from "./imageBox";
import Info from "./info";

export default function About() {
    return (
        <Grid container>
            <Grid item>
                <NavBar />
            </Grid>
            <Grid item>
                <ImageBox />
            </Grid>
            <Grid item>
                <Info />
            </Grid>
            <Grid item>
                <AboutAccordion />
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>

    )
}
