import { Card, CardContent, Grid } from '@mui/material';


export default function Compartment() {
    return (
        <Card className='compartmentParent'>
            <CardContent>
                <h1 className='compartmentHeader'>
                    SERVICE
                </h1>
                <p className='compartmentText'>
                    Do you need manuals or brochures for our products? You can download these in our download area. Learn about our training offerings or stay up-to-date with our quarterly NEWsletter.
                </p>
                <Grid>
                    <p className='compartmentP'>
                        SERVICE LINE FST <br />
                    </p>
                    <p className='compartmentNumber'>
                        +49 (0) 89 - 898 66 - 110
                    </p>
                </Grid>
                <Grid>
                    <p className='compartmentP'>
                        SERVICE LINE LMS24/7, LMSEleVision, KST <br />
                    </p>
                    <p className='compartmentNumber'>
                        +49 (0) 89 - 898 66 - 111
                    </p>
                </Grid>
                <button class="btn btn-2 hover-slide-right">
                    <span>hover me</span>
                </button>
            </CardContent>
        </Card>
    )
}
