import { Grid } from "rsuite";
import Footer from "../../../footer/footer";
import NavBar from "../../../header/navBar";
import AboutProductOne from "./aboutProductOne";
import ImageBox from "./imageBox";


export default function ProductTwo() {
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
                <Footer />
            </Grid>
        </Grid>
    )
}
