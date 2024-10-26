import { Card, CardContent, Grid } from '@mui/material';

export default function DetailsBox() {
    return (
        <Grid item xs={12} className='CenterItem '>
            <Grid container justifyContent='center'>
                <Card >
                    <CardContent className='DetailsBoxItem'>
                        <h5 className='titleInDetailsBox'>
                            INVENTOR SINCE 1986
                        </h5>
                        <h5 className='textInDetailsBox'>THE TAILOR AMONG THE CONTROL SUPPLIERS</h5>
                        <Grid sx={{ width: { xs: '100%', md: '50rem' }, textAlign: 'center', fontSize:'1.3rem' }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur nulla aspernatur officiis veritatis. Cumque necessitatibus quibusdam amet ducimus asperiores cupiditate nobis perspiciatis voluptatum maxime, facere non provident, atque ad magni!
                        </Grid>
                        <button class="btn btn-2 hover-slide-right">
                            <span>hover me</span>
                        </button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
