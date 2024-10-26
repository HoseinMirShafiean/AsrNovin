import { Card, CardContent, Grid, Typography } from '@mui/material';
import { aboutArticlesTwo } from '../../DTO/articles';


export default function AboutCard() {

    const Paragraph = [
        { text: aboutArticlesTwo.cards.one.text },
        { text: aboutArticlesTwo.cards.two.text },
        { text: aboutArticlesTwo.cards.three.text },
        { text: aboutArticlesTwo.cards.four.text },
        { text: aboutArticlesTwo.cards.five.text },
        { text: aboutArticlesTwo.cards.six.text },
        { text: aboutArticlesTwo.cards.seven.text },
        { text: aboutArticlesTwo.cards.eight.text },
        { text: aboutArticlesTwo.cards.nine.text },
        { text: aboutArticlesTwo.cards.ten.text },
        { text: aboutArticlesTwo.cards.eleven.text },
        { text: aboutArticlesTwo.cards.twelve.text },
        { text: aboutArticlesTwo.cards.thirteen.text },
    ]
    return (
        <Grid container className='boxRight'>
            <Card>
                <CardContent className='AboutCardInAboutArticleBox'>
                    <Typography variant="h4" component="div">
                        استانداردهای پله برقی
                    </Typography>
                    <Typography sx={{ color: '#363636', mb: 2, mt: 2 }}>
                        1399/12/30
                    </Typography>
                    <Typography sx={{ color: '#1f1f1f', mb: 3, fontSize: "1.2rem" }}>
                        در گذشته در بسیاری از پله برقی ها از استپ های چوبی استفاده می نمودند.اما پس ازحوادث اتش سوزی استفاده ازاین نوع استپ ها منسوخ گردید.دربرخی ازپله های برقی ازاستپ های فولادی نیزاستفاده شده است . امروزه استپ ها را معمولا از جنس آلومینیوم می سازند. استفاده از آلومینیوم باعث می گرددتا ضمن کاهش وزن استپ و نیز کاهش مصرف انرژی در پله برقی ، احتمال زنگ زدگی و خوردگی در آن به حداقل برسد.
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        برخی از مهمترین نکات در خصوص طراحی و ساخت استپ ها عبارتند از :
                    </Typography>
                    {Paragraph.map((item) => (
                        <Typography className='paragraphInArticle'>
                            {item.text}
                        </Typography>
                    ))}
                </CardContent>
            </Card>
        </Grid>
    )
}
