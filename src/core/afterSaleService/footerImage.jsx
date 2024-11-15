import { Grid } from 'rsuite';
import footerImage from "../../image/footerImage.png";


export default function FooterImage() {
    return (
        <Grid container className='footerImageContainer'>
            <div>
                <div className='footerImagecolumn'>
                    <a href='#'><img className='imageFooterInService' alt='CarouselImage2' src={footerImage} /></a>
                </div>
                <div className='footerImagecolumn'>
                    <a href='#'><img className='imageFooterInService' alt='CarouselImage2' src={footerImage} /></a>
                </div>
                <div className='footerImagecolumn'>
                    <a href='#'><img className='imageFooterInService' alt='CarouselImage2' src={footerImage} /></a>
                </div>
            </div>
        </Grid>
    )
}
