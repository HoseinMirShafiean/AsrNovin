import { Card, CardContent, Grid, Typography } from '@mui/material';
import homelifte from '../../../../image/homelifte.jpg';


export default function AboutProductTwo() {
    return (
        <Grid container className='boxRight' sx={{mt:'6rem'}}>
            <img className='ImageSizeProducts' alt='' src={homelifte} />
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                    تابلو فرمان مدل هوم لیفت HOME LIFT
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, fontSize: "larger" }}>
                        <br />بر اساس سیستم های هیدرولیک طراحی شدند و برای مکان هایی مناسب اند که فضای موجود آن ها برای نصب آسانسورهای کششی اندک می باشد. آسانسورهای هوم لیفت به نسبت سایر آسانسورهای هیدرولیک از قیمت مناسب تری برخوردار است و برای ساختمانهای مسکونی ، ویلایی و تجاری که برای نصب آسانسور از ارتفاع کمتری برخوردارند و نیز محدودیت از نظر فضای کاری دارند مناسب می باشد. این آسانسورها دارای ایمنی بالاتر و استهلاک پایین می باشند و امکان استفاده از برق تک فاز را دارند.<br />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
