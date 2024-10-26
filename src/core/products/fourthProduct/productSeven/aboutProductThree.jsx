import { Card, CardContent, Grid, Typography } from '@mui/material';
import HydroPlus from '../../../../image/HydroPlus.jpg';


export default function AboutProductThree() {
    return (
        <Grid container className='boxRight' sx={{mt:'6rem'}}>
            <img className='ImageSizeProducts' alt='' src={HydroPlus} />
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                    تابلو فرمان مدل هیدرو پلاس HYDRO PLUS
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, fontSize: "larger" }}>
                        <br />تابلوفرمان HYDRO PLUS   یک محصول منحصر به فرد با بالاترین سطح کیفیت و تکنولوژی است که به شرکتهای معتبر و مهندسی آسانسور برای اطمینان کامل از طول عمر و دوام و کسب بالاترین ضریب ایمنی و آسایش پیشنهاد می گردد .<br />
                        <br />سیستمی پیشرفته و مطمن برای کنترل انواع آسانسورهای هیدرولیک اعم از داخلی یا خارجی می باشد . نرم افزار پیشرفته هیدرولیک این تابلو ، قابلیت راه اندازی و مدیریت دقیق انواع پاور یونیت های هیدرولیک را دارد و موجب می شود آسانسور شما بدون خرابی ، توقف یا اختلال ، عملکردی صحیح و بهینه داشته باشد .<br />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
