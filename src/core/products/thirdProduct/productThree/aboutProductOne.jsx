import { Card, CardContent, Grid, Typography } from '@mui/material';
import kampakeRemovebgPreview from '../../../../image/kampakeRemovebgPreview.png';


export default function AboutProductOne() {
    return (
        <Grid container className='boxRight'>
            <img className='ImageSizeProducts' alt='' src={kampakeRemovebgPreview} />
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                        تابلو فرمان مدل KAMPAK
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, fontSize: "larger" }}>
                        <br />کنترل آسانسور تا 64 طبقه و تا سرعت 4m/s<br />
                        کنترل سیمپلکس ، دوبلکس و گروهی تا 8 آسانسور<br />
                        حرکت شیرجه ای<br />
                        <br />تابلو فرمان کامپکت (Integrated Systems):<br />
                        <br />سیستم کنترل یکپارچه ، تابلو فرمانی  است  که توسط شرکتهای انگشت شمار و مطرح دنیا تولید و ارائه میگردد. عصرنوین  با تجربه و دانش فنی خود و با مشارکت مستقیم شرکت MONARCH  اقدام به طراحی و تولید  سیستم های یکپارچه کنترل آسانسور در ایران  نموده است که برای ساختمان هایی که به دنبال مطمن ترین و پیشرفته ترین آسانسور هستند راهکاری بی نظیر و پیشرفته است.<br />
                        <br />این سیستم کنترل با دارا بودن استاندارد اتحادیه اروپا، برای ساختمان های مرتفع و با سرعت بالا یکی از بهترین و مطمن ترین راه حل ها در سطح بین المللی است و به 27 کشور صادر می شود.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
