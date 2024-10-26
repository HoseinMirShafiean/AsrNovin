import { Card, CardContent, Grid, Typography } from '@mui/material';
import HRemovebgPreview from '../../../../image/HRemovebgPreview.png';


export default function AboutProductOne() {
    return (
        <Grid container className='boxRight'>
            <img className='ImageSizeProducts' alt='' src={HRemovebgPreview} />
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                        تابلو فرمان هيدروليک
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, fontSize: "larger" }}>
                        <br />تابلوفرمان هیدرولیک  NETLIFT  سیستمی پیشرفته و مطمن برای کنترل انواع آسانسورهای هیدرولیک اعم از داخلی یا خارجی می باشد . نرم افزار پیشرفته هیدرولیک این تابلو ، قابلیت راه اندازی و مدیریت دقیق انواع پاور یونیت های هیدرولیک را دارد و موجب می شود آسانسور شما بدون خرابی ، توقف یا اختلال ، عملکردی صحیح و بهینه داشته باشد.<br />
                        <br />همکاری ما با شرکتهای بزرگی چون هیدروفرکو ، هیدروپارت ، شکیب جک ، سامان فراز، اسکاد  به عنوان بزرگان تولید پاور یونیت ایران و شرکتهای بهفخر ، رازی ، نیکوبران و صدها شرکت طراحی و مونتاژ آسانسور ایران برگ زرینی بر تایید کیفیت محصولات ماست.<br />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
