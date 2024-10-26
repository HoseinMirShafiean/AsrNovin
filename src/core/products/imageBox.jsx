import {Grid, Breadcrumbs, Link, Typography} from '@mui/material'
import Downloads from "../../image/Downloads.png"


export default function ImageBox() {
  return (
    <Grid container className='CenterItem imageBoxInService'  >
      <Grid item className='imageContainerInService'>
        <img className='imageInService' alt='ServiceHeader' src={Downloads} />
      </Grid>
      <Grid item className='tableInService'>
      <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            خانه
          </Link>
          <Typography sx={{ color: 'text.primary' }}>محصولات</Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>
  )
}
