import { Grid } from "rsuite";
import Footer from "../../footer/footer";
import NavBar from "../../header/navBar";
import ImageBox from "./imageBox";
import TitleCard from "./titleCard";


export default function FifthProduct() {
    return (
        <Grid container>
            <Grid item>
                <NavBar />
            </Grid>
            <Grid item>
                <ImageBox />
            </Grid>
            <Grid item>
                <TitleCard />
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    )
}
