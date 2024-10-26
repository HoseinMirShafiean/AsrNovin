import { Card, CardContent, Grid, Typography } from '@mui/material';
import netliftRemovebgPreview from '../../../../image/netliftRemovebgPreview.png';


export default function AboutProductOne() {
    return (
        <Grid container className='boxRight'>
            <img className='ImageSizeProducts' alt='' src={netliftRemovebgPreview} />
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                        تابلو فرمان مدل NETLIFT
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, fontSize: "larger" }}>
                        <br />سرویس دهی تا 32طبقه با یک تراول کابل 16 رشته.<br />
                        قابل استفاده برای موتورهای سنکرون و آسنکرون.<br />
                        کنترل آسانسور به صورت سیمپلکس ، دوبلکس ، سلکتیو و کلکتیو<br />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
