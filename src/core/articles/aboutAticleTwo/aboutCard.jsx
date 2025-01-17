import { Card, CardContent, Grid, Typography } from '@mui/material';
import { aboutArticlesTwo } from '../../DTO/articles';


export default function AboutCard() {

    const Paragraph = [
        { id: 1, text: aboutArticlesTwo.cards.one.text },
        { id: 2, text: aboutArticlesTwo.cards.two.text },
        { id: 3, text: aboutArticlesTwo.cards.three.text },
        { id: 4, text: aboutArticlesTwo.cards.four.text },
        { id: 5, text: aboutArticlesTwo.cards.five.text },
        { id: 6, text: aboutArticlesTwo.cards.six.text },
        { id: 7, text: aboutArticlesTwo.cards.seven.text },
        { id: 8, text: aboutArticlesTwo.cards.eight.text },
        { id: 9, text: aboutArticlesTwo.cards.nine.text },
        { id: 10, text: aboutArticlesTwo.cards.ten.text },
        { id: 11, text: aboutArticlesTwo.cards.eleven.text },
        { id: 12, text: aboutArticlesTwo.cards.twelve.text },
        { id: 13, text: aboutArticlesTwo.cards.thirteen.text },
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
                        <Typography key={item.id} className='paragraphInArticle'>
                            {item.text}
                        </Typography>
                    ))}
                </CardContent>
            </Card>
        </Grid>
    )
}
