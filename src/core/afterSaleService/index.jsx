import { Grid } from "rsuite";
import Footer from "../footer/footer";
import NavBar from "../header/navBar";
import FooterImage from "./footerImage";
import ImageBox from "./imageBox";
import Info from "./info";


export default function AfterSaleService() {
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
                <FooterImage />
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    )
}
