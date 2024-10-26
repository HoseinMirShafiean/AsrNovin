import { Card, CardContent, Grid, Typography } from '@mui/material';
import razoneRemovebgPreview from '../../../../image/razoneRemovebgPreview.png';


export default function AboutProductOne() {
    return (
        <Grid container className='boxRight'>
            <img className='ImageSizeProducts' alt='' src={razoneRemovebgPreview} />
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                        جعبه ریویزیون سریال
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, fontSize: "larger" }}>
                        <br />با توجه به مزایای سیستم سریال ، واحد تحقیق و توسعه شرکت زمان زیادی را جهت طراحي سیستم سریال مطمئن و مقاوم در برابر نویز صرف نمود . اینک تابلو فرمان های با سیستم سریال شرکت جزء نقاط قوت شرکت عصر نوین به حساب مي آید و توانسته رضایت مشتریان را جلب نماید.<br />
                        <br />ویژگی ها :<br />
                        <br />قابلیت روشن و خاموش کردن چراغ های تونلی از طریق جعبه سریال<br />
                        کاهش تعداد رشته های سیم تراول تا 16رشته<br />
                        استفاده از ترمینال های رنگی جهت سهولت در سیم کشی<br />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
