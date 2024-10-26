import { Grid } from 'rsuite';
import CompartmentImage from '../../image/CompartmentImage.png';


export default function CompartmentImages() {
    return (
        <Grid container className='CompartmentImagesContainer'>
            <div className="CompartmentImagesParent">
                <div className='CompartmentImagescolumn'>
                    <a href='#'><img className='imageCompartment' alt='CarouselImage2' src={CompartmentImage} /></a>
                </div>
                <div className='CompartmentImagescolumn'>
                    <a href='#'><img className='imageCompartment' alt='CarouselImage2' src={CompartmentImage} /></a>
                </div>
                <div className='CompartmentImagescolumn'>
                    <a href='#'><img className='imageCompartment' alt='CarouselImage2' src={CompartmentImage} /></a>
                </div>
            </div>
        </Grid>
    )
}
