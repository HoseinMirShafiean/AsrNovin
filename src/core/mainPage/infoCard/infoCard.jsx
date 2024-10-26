import DownloadDoneOutlinedIcon from '@mui/icons-material/DownloadDoneOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { infoCard } from '../../DTO/mainPage';

export default function InfoCard() {

    const dto = [
        {
            id: 0,
            title: infoCard.cards.one.title,
            description: infoCard.cards.one.description,
        },
        {
            id: 1,
            title: infoCard.cards.two.title,
            description: infoCard.cards.two.description,
        },
        {
            id: 2,
            title: infoCard.cards.three.title,
            description: infoCard.cards.three.description,
        },
    ];
    
    return (
        <Grid container className='InfoContiner'>
            {dto.map((item) => (
                <Grid key={item.id} item md={4} 
                sx={{height:{xs:"500px"}}}>
                    <ItemCard item={item} />
                </Grid>
            ))}
        </Grid>
    )
}

const ItemCard = (props) => {
    const { item } = props;
    return (
        <>
        <Card>
            <CardContent>
                {item.id===0 && <EditCalendarOutlinedIcon className='iconInfo' />}
                {item.id===1 && <EmojiEventsOutlinedIcon className='iconInfo' />}
                {item.id===2 && <DownloadDoneOutlinedIcon className='iconInfo' />}
                <Typography className='titleInfo' variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography className='textInfo' variant="body2">
                    {item.description}
                </Typography>
            </CardContent>
        </Card>
        </>
    )
}