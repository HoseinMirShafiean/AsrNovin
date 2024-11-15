import { Card, CardContent, Grid } from '@mui/material';
import { aboutCard } from '../DTO/mainPage';


export default function AboutCard() {
    const dto = [
        {
            id: 0,
            number: aboutCard.cards.one.number,
            title: aboutCard.cards.one.title,
            bottomText: aboutCard.cards.one.bottomText,
            paragraph: aboutCard.cards.one.description
        },
        {
            id: 1,
            number: aboutCard.cards.two.number,
            title: aboutCard.cards.two.title,
            bottomText: aboutCard.cards.one.bottomText,
            paragraph: aboutCard.cards.two.description
        },
        {
            id: 2,
            number: aboutCard.cards.three.number,
            title: aboutCard.cards.three.title,
            bottomText: aboutCard.cards.one.bottomText,
            paragraph: aboutCard.cards.three.description

        },
    ]

    return (
        <Grid container className='aboutCardcontainer'>
            {dto.map((item) => (
                <Grid item className='CenterItem' md={4}>
                    <ItemAboutCard item={item} />
                </Grid>
            ))}
        </Grid>
    )
}

const ItemAboutCard = (props) => {
    const { item } = props;
    return (
        <Card className='aboutCardParent cursor' >
            <CardContent className='aboutCardcbox'>
                <h6 className='FontSizeAboutCard'>{item.number}</h6>
                <h1 className='FontSizeAboutCard'>{item.title}</h1>
                <Grid className='boxParagraphInAbout'>
                    <Grid className='overlayParagraphInAbout'>
                        <h6 className='paragraphHidenInAbout'>{item.paragraph}</h6>
                    </Grid>
                </Grid>
                <h5 className='mtMoreTransition'>{item.bottomText}</h5>
            </CardContent>
        </Card>
    )
}
