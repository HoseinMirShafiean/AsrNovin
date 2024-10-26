import { Card, CardContent, CardMedia, Grid } from '@mui/material';
import IntroBild from "../../image/IntroBild.jpg";

export default function InformationBox() {
    return (
        <Grid container sx={{ width: {xs:'50rem', md:'100%'} }}>
            <Card className='informationParent'>
                <h1 className='typographyInformation'>References</h1>
                <CardMedia
                    className='imageIninformation'
                    component="img"
                    height="470"
                    src={IntroBild}
                    alt="References"
                />
                <CardContent>
                    <h3 className='typographyInInformation' gutterBottom variant="h5" component="div">
                        GREAT OLYMPIC HILL IN GARMISCH
                    </h3>
                </CardContent>
                <Grid className='informationBoxButton CenterItem'>
                    <button class="btn btn-2 hover-slide-right">
                        <span>hover me</span>
                    </button>
                </Grid>
            </Card>
        </Grid>
    )
}
