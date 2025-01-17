import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import { productSeven } from '../../../DTO/products';

const dot = [
    {
        id: 0,
        title: productSeven.cards.one.title,
        file: productSeven.cards.one.file
    },
    {
        id: 1,
        title: productSeven.cards.two.title,
        file: productSeven.cards.two.file
    },
    {
        id: 2,
        title: productSeven.cards.three.title,
        file: productSeven.cards.three.file
    },
]

export default function AboutAccordionProductOne() {
    return (
        <Grid container className='ContainerInDownload'>
            {dot.map((item) => (
                <Grid key={item.id}>
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