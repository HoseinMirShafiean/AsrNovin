import { Grid } from "rsuite";
import Footer from "../../../footer/footer";
import NavBar from "../../../header/navBar";
import AboutAccordionProductOne from "./aboutAccordion";
import AboutAccordionProductThree from "./aboutAccordionThree";
import AboutAccordionProductTwo from "./aboutAccordionTwo";
import AboutProductFour from "./aboutProductFour";
import AboutProductOne from "./aboutProductOne";
import AboutProductThree from "./aboutProductThree";
import AboutProductTwo from "./aboutProductTwo";
import ImageBox from "./imageBox";


export default function ProductSeven() {
    return (
        <Grid container>
            <Grid item>
                <NavBar />
            </Grid>
            <Grid item>
                <ImageBox />
            </Grid>
            <Grid item>
                <AboutProductOne />
            </Grid> 
            <Grid item>
                <AboutAccordionProductOne />
            </Grid>
            <Grid item>
                <AboutProductTwo />
            </Grid> 
            <Grid item>
                <AboutAccordionProductTwo />
            </Grid>
            <Grid item>
                <AboutProductThree />
            </Grid> 
            <Grid item>
                <AboutAccordionProductThree />
            </Grid>
            <Grid item>
                <AboutProductFour />
            </Grid> 
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    )
}
