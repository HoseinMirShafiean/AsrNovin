import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import NavBar from '../header/navBar';
import AboutCard from './aboutCard';
import Compartment from './compartment';
import CompartmentImages from './compartmentImages';
import DetailsBox from './detailsBox';
import DetailsCard from './detailsCard';
import DetailsTabs from './detailsTabs';
import ImageSlider from './imageSlider';
import InfoCard from './infoCard/infoCard';
import InformationBox from './informationBox';
import Sections from './Sections';



export default function Home() {

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item>
        <NavBar />
      </Grid>
      <Grid item>
        <ImageSlider />
      </Grid>
      <Grid item>
        <InfoCard />
      </Grid>
      <Grid item>
        <Sections />
      </Grid>
      <Grid item xs={12}>
        <DetailsBox />
      </Grid>
      <Grid item xs={12}>
        <AboutCard />
      </Grid>
      <Grid item >
        <InformationBox />
      </Grid>
      <Grid container xs={12}>
        <Grid item sm={3}>
          <Compartment />
        </Grid>
        <Grid item sm={3}>
          <CompartmentImages />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <DetailsCard />
      </Grid>
      <Grid item >
        <DetailsTabs />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
      <Outlet/>
    </Grid>
  )
}