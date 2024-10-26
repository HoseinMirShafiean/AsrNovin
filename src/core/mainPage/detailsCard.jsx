import { Card, CardContent, Grid } from '@mui/material';


export default function DetailsCard() {
    return (
        <Grid item xs={12} className='CenterItem DetailsCardParent'>
            <Grid container justifyContent='center'>
                <Card >
                    <CardContent className='DetailsBoxItem'>
                        <h5 className='titleInDetailsBox'>
                            Contact
                        </h5>
                        <Grid sx={{ width: { xs: '100%', md: '50rem' }, textAlign: 'center', fontSize: '18px' }}>
                            Does our website spark your interest, and would you like to learn more? Are you a customer or partner of NEW LIFT and have a concern?
                            Then simply contact us, either using the form or directly via a contact person.
                            Don’t worry, the wait time is – just like with our lift control systems – pleasantly short.
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
