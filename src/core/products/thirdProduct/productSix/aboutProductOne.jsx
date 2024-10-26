import { Card, CardContent, Grid, Typography } from '@mui/material';
import vvvvfeRemovebgPreview from '../../../../image/vvvvfeRemovebgPreview.png';


export default function AboutProductOne() {
    return (
        <Grid container className='boxRight'>
            <img className='ImageSizeProducts' alt='' src={vvvvfeRemovebgPreview} />
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                        تابلو فرمان مبدل دو سرعته به درایودار VVVF
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, fontSize: "larger" }}>
                        <br />حرکت و توقف نرم آسانسور <br />
                        کاهش مصرف برق<br />
                        کاهش تنش های مکانیکی در آسانسور<br />
                        <br />درگذشته نه چندان دور ، در ایران بیشتر آسانسور ها از موتورهای دو سرعته و تابلو های دوسرعته استفاده میکردند ، با تغییر استاندارد های راه اندازی آسانسور و الزام استفاده از درایوهای کنترل سرعت ، ما راه حلی برای تبدیل آسانسورهای دو سرعته به درایو دار و استفاده از مزایای آن طراحی کرده ایم.<br />
                        <br />تابلو فرمان استاندارد ” مبدل دوسرعته به درایو دار ” آسانسور دوسرعته را با روشی کاملا مهندسی و استاندارد به آسانسور درایو دار تبدیل میکند .<br />
                        <br />مزایای مبدل آسانسور دوسرعته به درایو دار :<br />
                        <br />حرکت و توقف نرم آسانسور
                        <br />کاهش مصرف برق
                        <br />کاهش تنش های مکانیکی در آسانسور
                        <br />افزایش طول عمر موتور و سایر قطعات مکانیکی
                        <br />حفاظت بالاتر از موتور آسانسور
                        <br />اجرای استاندارد
                        <br /> گارانتی یکساله
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
