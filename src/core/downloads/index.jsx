import { Grid } from "rsuite";
import Footer from "../footer/footer";
import NavBar from "../header/navBar";
import FileDownload from "./fileDownload";
import ImageBox from "./imageBox";
import Info from "./info";

export default function Download() {
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
                <FileDownload />
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>

    )
}
