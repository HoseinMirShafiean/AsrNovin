import { Grid } from "rsuite";
import Footer from "../footer/footer";
import NavBar from "../header/navBar";
import DetailsCard from "./detailsCard";
import ImageBox from "./imageBox";

export default function Articles() {
    return (
        <Grid container>
            <Grid item>
                <NavBar />
            </Grid>
            <Grid>
                <ImageBox />
            </Grid>
            <Grid>
                <DetailsCard />
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    )
}
