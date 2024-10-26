import { Breadcrumbs, Grid, Link, Typography } from '@mui/material'
import ServiceHeader from "../../image/ServiceHeader.jpg"


export default function ImageBox() {
  return (
    <Grid container className='CenterItem imageBoxInService'  >
      <Grid item className='imageContainerInService'>
        <img className='imageInService' alt='ServiceHeader' src={ServiceHeader} />
      </Grid>
      <Grid item className='tableInService'>
      <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            خانه
          </Link>
          <Typography sx={{ color: 'text.primary' }}>خدمات پس از فروش</Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>
  )
}
