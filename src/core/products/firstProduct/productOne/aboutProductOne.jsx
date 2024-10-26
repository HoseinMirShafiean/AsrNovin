import { Card, CardContent, Grid, Typography } from '@mui/material';
import UpsRemovebgPreview from '../../../../image/UpsRemovebgPreview.png';


export default function AboutProductOne() {
    return (
        <Grid container className='boxRight'>
            <img className='ImageSizeProducts' alt='' src={UpsRemovebgPreview} />
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                        نجات اضطراری آسانسور UPS
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, fontSize: "larger" }}>
                        <br/>عملکرد اتوماتیک<br />
                        قابل اتصال به همه تابلو های فرمان<br />
                        شارژر باتری<br />
                        <br />این سیستم وظیفه نجات اضطراری در زمان های  قطعی برق را برعهده دارد به طوری که پس از قطعی برق شبکه به صورت اتوماتیک  وارد مدار شده و کابین را به نزدیکترین طبقه راهنمایی مینماید.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
