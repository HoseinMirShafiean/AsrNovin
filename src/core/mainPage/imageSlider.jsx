import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../../image/CarouselImage.jpg';
import { Grid, Button } from '@mui/material';

export default function ImageSlider() {
    return (
        <Grid className='carouselsBox'>
            <Carousel  >
                <Carousel.Item>
                    <img alt='CarouselImage' className='ImageSliderImage'
                        src={CarouselImage}
                    />
                    <Carousel.Caption>
                                <h3 className='titleImageSlider'>عصر نوین</h3>
                        <p className='paragraphImageSlider'>عصر نوین کیفیتی متمایز</p>
                        <Button className='imageSliderButton' variant="contained" disableElevation>
                            Disable elevation
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img alt='CarouselImage2' className='ImageSliderImage'
                        src={CarouselImage}
                    />
                    <Carousel.Caption>
                        <h3 className='titleImageSlider'>کیفیتی متمایز، خدماتی مطمئن</h3>
                        <p className='paragraphImageSlider'>پشتیبانی 24 ساعته</p>
                        <Button className='imageSliderButton' variant="contained" disableElevation>
                            Disable elevation
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img alt='ImageSliderImage' className='ImageSliderImage'
                        src={CarouselImage}
                    />
                    <Carousel.Caption>
                        <h3 className='titleImageSlider'>آسوده باشید</h3>
                        <p className='paragraphImageSlider'>آرامش و امنیت در ساختمان</p>
                        <Button className='imageSliderButton' variant="contained" disableElevation>
                            Disable elevation
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Grid>
    )
}
