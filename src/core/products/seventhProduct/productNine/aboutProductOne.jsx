import { Card, CardContent, Grid, Typography } from '@mui/material';
import cegRemovebgPreview from '../../../../image/cegRemovebgPreview.png';


export default function AboutProductOne() {
    return (
        <Grid container className='boxRight'>
            <img className='ImageSizeProducts' alt='' src={cegRemovebgPreview} />
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                        موتور گیرلس CEG ساخت اسپانیا
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, fontSize: "larger" }}>
                        <br />حذف گیربکس و افزایش راندمان الکتروموتور<br />
                        کاهش ابعاد و وزن<br />
                        کاهش صدا و لرزش<br />
                        <br />شرکت عصرنوین نمایندگی انحصاری موتور گیرلس کمپانی معروف CEG اسپانیا  است . این کمپانی محصولات خود را با عنوان تجاری ACT عرضه مینماید ،  بیش از 47 سال سابقه تولید موتور آسانسور در اروپا دارد و از برندهای مطرح اروپا در تولید این  محصول است.عصرنوین نمانیدگی انحصاری CEG در ایران و عاملیت فروش کشور این شرکت در عراق میباشد<br />
                        <br />مزایای موتورهای گیرلس نسبت به موتور گیربکس :<br />
                        <br />1- کاهش تلفات و افزایش راندمان در موتور گیرلس (حذف گیربکس و افزایش راندمان الکتروموتور)<br />
                        2- کاهش ابعاد و وزن<br />
                        3- کاهش صدا و لرزش<br />
                        4- حذف گیربکس،فلایویل و هندویل<br />
                        5- حذف کوپلینگ و کاهش تعداد اجزا دوار<br />
                        6- دور کم و کاهش تاثیر بالانس قطعات دوار و صدای بلرینگها<br />
                        7- استهلاک کم وعدم نیاز به سرویس و نگهداری پر هزینه<br />
                        8- کاهش خسارتهای زیست محیطی<br />
                        9- امکان استفاده در سرعتهای بالا (سرعتهای بیش از 3 متر معمولا فقط گیرلس استفاده میشود)<br />
                        <br />طراحي این موتورها به گونه ای است که دارای سرعت پایین و گشتاور بالا هستند و نیازی به جعبه دنده ندارند. در نتیجه بازده ای در حدود %90 دارند.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
