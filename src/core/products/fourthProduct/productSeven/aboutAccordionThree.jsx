import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';

const dot = [
    {
        id: 0,
        title: 'یک تابلو فرمان متفاوت با بالاترین سطح کیفیت :',
        file: 'کنتاکتور های زیمنس آلمان<br />رله های فونیکس ایتالیا<br />ترمینال ها SREWLESS<br />3 سال گارانتی و 15 سال خدمات پس از فروش <br />'
    },
]

export default function AboutAccordionProductThree() {
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