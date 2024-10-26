import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import { ProductOne } from '../../../DTO/products';

const dot = [
    {
        id: 0,
        title: ProductOne.cards.one.title,
        file: ProductOne.cards.one.file
    },
    {
        id: 1,
        title: ProductOne.cards.two.title,
        file: ProductOne.cards.two.file
    },]

export default function AboutAccordionProductOne() {
    return (
        <Grid container className='ContainerInDownload'>
            {dot.map((item) => (
                <Grid>
                    <ItemDownload item={item} />
                </Grid>
            ))}
        </Grid>
    )
}

const ItemDownload = (props) => {
    const { item } = props;
    return (
        <Grid className={item.className}>
            <Accordion className='listInProducts'>
                <AccordionSummary
                    className='listBoxInDownload'
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className='boxListInDownload'>
                    <Typography>{item.file}</Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}