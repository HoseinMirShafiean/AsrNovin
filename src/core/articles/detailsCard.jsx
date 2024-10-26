import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { articles } from '../DTO/articles';


export default function DetailsCard() {

    const dto = [
        {
            id: 0,
            date: articles.cards.one.data,
            title: articles.cards.one.title,
            text: articles.cards.one.text,
            button: articles.cards.one.button,
            route: articles.cards.one.route,
        },
        {
            id: 1,
            date: articles.cards.two.data,
            title: articles.cards.two.title,
            text: articles.cards.two.text,
            button: articles.cards.one.button,
            route: articles.cards.two.route,
            className: 'marginButtonDetailsCard'
        },
    ];

    return (
        <Grid container className='detailsContainerInArticle'>
            {dto.map((item) => (
                <Grid item>
                    <ItemCard item={item} />
                </Grid>
            ))}
        </Grid>
    )
}

const ItemCard = (props) => {
    const navigate = useNavigate();
    const handleArticleButton = (route) => {
        navigate(route)
    };

    const { item } = props;
    return (
        <Card className={item.className}>
            <CardContent>
                <Typography component="div">
                    {item.date}
                </Typography>
                <Typography variant='h4' sx={{ color: '#000', mb: 1.5 }}>{item.title}</Typography>
                <Typography variant='body' className='FontParagraphArticle'>
                    {item.text}
                </Typography>
            </CardContent>
            <CardActions className='buttonInArticles'>
                <button className="btn btn-2 hover-slide-right "
                    onClick={() => {
                        handleArticleButton(item.route)
                    }}>
                    <span>{item.button}</span>
                </button>
            </CardActions>
        </Card>
    )
}
