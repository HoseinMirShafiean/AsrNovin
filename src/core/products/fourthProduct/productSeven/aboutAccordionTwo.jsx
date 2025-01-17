import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';

const dot = [
    {
        id: 0,
        title: 'ویژگی های تابلو هوم لیفت عصر نوین',
        file: 'پشتیبانی تا 5 توقف به صورت پارالل و 8 توقف به صورت سریال <br />پشتیبانی از تمام درب ها<br />دارای کلیدهای احضار حافظه دار و قابلیت canceling<br />امکان Automatic Releveling و اتوپارک<br />قابلیت WARM UP (جلوگیری از یخ زدگی روغن )<br />اعلام تمامی خطاها بر روی نمایشگر<br />امکان استفاده از درایو تک فاز به 3فاز<br />امکان اتصال به UPS<br />پشتیبانی از شیر برقی 4 بوبین<br />قابلیت FTO<br />دارای تمام ویژگی های آسانسورهای هیدرولیک<br />'
    },
]

export default function AboutAccordionProductTwo() {
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