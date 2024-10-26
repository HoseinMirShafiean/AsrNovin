import {Grid, Breadcrumbs, Link, Typography} from '@mui/material'
import ArticleImage from "../../../image/ArticleImage.png"


export default function ImageBox() {
  return (
    <Grid container className='CenterItem imageBoxInService'  >
      <Grid item className='imageContainerInService'>
        <img className='imageInService' alt='ServiceHeader' src={ArticleImage} />
      </Grid>
      <Grid item className='tableInService'>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            خانه
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            مقالات
          </Link>
          <Typography sx={{ color: 'text.primary' }}>خواندن مقاله</Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>
  )
}
