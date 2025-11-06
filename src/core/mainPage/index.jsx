import { Grid } from "@mui/material";
import Footer from "../footer/footer";
import NavBar from "../header/navBar";
import AboutCard from "./aboutCard";
import Compartment from "./compartment";
import CompartmentImages from "./compartmentImages";
import DetailsBox from "./detailsBox";
import DetailsCard from "./detailsCard";
import DetailsTabs from "./detailsTabs";
import ImageSlider from "./imageSlider";
import InfoCard from "./infoCard/infoCard";
import InformationBox from "./informationBox";
import Map from "./map";
import Sections from "./Sections";

export default function Home() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ width: "100vw", overflowX: "hidden", m: 0 }}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>

      <Grid item xs={12}>
        <ImageSlider />
      </Grid>

      <Grid item xs={12}>
        <InfoCard />
      </Grid>

      <Grid item xs={12}>
        <Sections />
      </Grid>

      <Grid item xs={12}>
        <DetailsBox />
      </Grid>

      <Grid item xs={12}>
        <AboutCard />
      </Grid>

      <Grid item xs={12}>
        <InformationBox />
      </Grid>

      <Grid item xs={12}>
        <Compartment />
      </Grid>

      <Grid item xs={12}>
        <CompartmentImages />
      </Grid>

      <Grid item xs={12}>
        <DetailsCard />
      </Grid>

      <Grid item xs={12}>
        <DetailsTabs />
      </Grid>

      <Grid item xs={12}>
        <Map />
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
