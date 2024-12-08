import { Grid } from "rsuite";
import Footer from "../footer/footer";
import NavBar from "../header/navBar";
import Cards from "./cards";
import ImageBox from "./imageBox";
import Info from "./info";


export default function Products() {
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
                <Cards />
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    )
}
