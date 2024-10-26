import { Card, CardContent, Grid, Typography } from '@mui/material';
import mixxeRemovebgPreview from '../../../../image/mixxeRemovebgPreview.png';


export default function AboutProductOne() {
    return (
        <Grid container className='boxRight'>
            <img className='ImageSizeProducts' alt='' src={mixxeRemovebgPreview} />
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                        پیکیج کامل آسانسور<br /><br />پک موتور گیرلس و تابلو فرمان آسانسور :
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, fontSize: "larger" }}>
                        <br />شرکت عصرنوین با توجه به مزیتی که در داشتن برج تست MRL دارد کلیه موتور ها و تابلو فرمان های فروش رفته را در برج تست بصورت کامل تست نموده و هماهنگی کامل حرکتی و پارامتری آنها را بررسی و پس از تائید واحد کنترل کیفیت به مشتریانش ارسال میکند.<br />
                        <br />این پکیج با سه نوع درایو و سیستم کنترل ارایه می شود:<br />
                        <br />پک موتور و تابلو فرمان با درایو آرکل و مونارک<br />
                        پک موتور و تابلو فرمان با درایو یاسکاوا<br />
                        پک موتور و تابلو فرمان با کامپکت عصرنوین<br />
                        <br />موتور های گیرلس در رنجهای 6   8   10   13  نفره 1 و  1.6 تا 2.5 متر  /ثانیه با 2 سال گارانتی ارائه میشود.<br />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
