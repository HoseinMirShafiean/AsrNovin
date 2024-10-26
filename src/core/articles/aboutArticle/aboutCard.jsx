import { Card, CardContent, Grid, Typography } from '@mui/material';
import { aboutArticles } from '../../DTO/articles';


export default function AboutCard() {

    const Paragraph =[
        {text: aboutArticles.cards.one.text},
        {text: aboutArticles.cards.two.text},
        {text: aboutArticles.cards.three.text},
        {text: aboutArticles.cards.four.text},
        {text: aboutArticles.cards.five.text},
    ]
    return (
        <Grid container className='boxRight'>
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                        آیا سقوط آسانسور امکان پذیر است؟
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, mt: 2 }}>
                        1399/06/25
                    </Typography>
                    <Typography sx={{ color: '#1f1f1f', mb: 2, fontSize: "1.2rem" }}>
                        در فیلم‌های بسیاری دیده اید که مثلا آسانسور از طبقه دهم یک ساختمان سقوط ایمنی آسانسورکرده است و یا اینکه با قطع شدن برق‌ها آسانسور سقوط میکند و امثال اینها…
                    </Typography>
                    <Typography sx={{ color: '#1f1f1f', mb: 4, fontSize: "1.2rem" }}>
                        قبل از هر چیز بگوییم که یک آسانسور این روز‌ها به ندرت سقوط میکند.
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 5 }}>
                        حالا در اینجا به نکاتی قابل توجه در مورد آسانسور اشاره می‌نماییم:
                    </Typography>
                    {Paragraph.map((item) => (
                        <Typography className='paragraphInArticle'>
                            {item.text}
                        </Typography>
                    ))}
                    <Typography sx={{ color: '#1f1f1f', fontSize: "1.2rem" }}>
                        با خیال راحت از آسانسور استفاده کنید، اما همیشه از ایمنی آن خاطر جمع سپس از آن استفاده کنید. سقوط آسانسور به دلیل عمل نکردن ترمز و یا پاره شدن کابل ممکن است که معمولا بسیار کم پیش می‌آید. بد نیست بدانید که طبق آمار، بیشتر حوادث آسانسور برای زحمت کشان آسانسور یعنی تعمیر کاران، سازنده، سرویسکار و تکنسین‌های این صنعت پیش می‌آید و تمام تلاش این است که مصرف کنندگان عزیز در رفاه و ایمنی کامل از این وسیله استفاده نمایند.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )}
