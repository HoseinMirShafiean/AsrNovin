import { Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArticleImage from "../../../../image/ArticleImage.png";



export default function ImageBox() {
  const navigate = useNavigate();

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
            className='cursor'
            underline="hover"
            color="inherit"
            onClick={() => navigate('/products')}
          >
            محصولات
          </Link>
          <Link
            className='cursor'
            underline="hover"
            color="inherit"
            onClick={() => navigate('تابلو فرمان آسانسورهای کششی')}
          >
            تابلو فرمان آسانسورهای کششی
          </Link>
          <Typography sx={{ color: 'text.primary' }}>تابلو فرمان مدل NETLIFT</Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>
  )
}
