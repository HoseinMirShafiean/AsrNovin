import { Card, CardContent, Grid, Typography } from '@mui/material';
import removebgPreview from '../../../../image/removebgPreview.jpg';


export default function AboutProductOne() {
    return (
        <Grid container className='boxRight'>
            <img className='ImageSizeProducts' alt='' src={removebgPreview} />
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                        تابلو فرمان مدل QUICK
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, fontSize: "larger" }}>
                        <br />کنترل آسانسور به صورت سیمپلکس<br />
                        قابل استفاده برای موتورهای سنکرون و آسنکرون<br />
                        سرویس دهی تا 16 طبقه با یک تراول کابل 16 رشته فقط به صورت سریال<br />
                        قابلیت راه اندازی به صورت بدون سنسور دور انداز (sensorless)<br />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
