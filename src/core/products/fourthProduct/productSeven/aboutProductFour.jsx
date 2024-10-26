import { Card, CardContent, Grid, Typography } from '@mui/material';
import hydroTetae from '../../../../image/hydroTetae.jpeg';


export default function AboutProductFour() {
    return (
        <Grid container className='boxRight' sx={{ mt: '6rem' }}>
            <img className='ImageSizeProducts' alt='' src={hydroTetae} />
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                        تابلو فرمان هیدرولیک/کششی تکفاز به سه فاز :
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, fontSize: "larger" }}>
                        <br />عدم وجود برق سه فاز ، در بسیاری از ویلا ها ، ساختمان های 2/3/4 طبقه و ساختمان های قدیمی بدون آسانسور ، که تصمیم به نصب آسانسور میگیرند ، یکی از مشکلات ساکنین ساختمان است . عصرنوین با طراحی تابلو فرمان آسانسور که با برق تکفاز عملکرد نرمال و استاندارد دارد ، این مسله را به صورت کاملا حرفه ای حل کرده است.<br />
                        <br />این محصول با بهره بردن از درایوهای ویژه و مدارات مبدل از برق ورودی تکفاز استفاده کرده و آسانسور هیدرولیک یا کششی را راه اندازی و کنترل میکند.<br />
                        <br />با توجه به خاص بودن این پروژه ها ، می توانید از از مشاوران فنی ما در خصوص انتخاب قطعات مشورت بگیرید. محدودیت توان در این نوع آسانسور ها ، نیاز به برق ورودی با جریان بالا از مواردی است که در طراحی این نوع آسانسورها باید در نظر گرفته شود.<br />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
