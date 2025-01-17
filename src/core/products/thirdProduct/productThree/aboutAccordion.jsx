import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';

const dot = [
    {
        id: 0,
        title: 'مشخصات فنی تابلو فرمان KAMPAK:',
        file: ' کنترل آسانسور تا 64 طبقه و تا سرعت 4m/s<br />کنترل سیمپلکس ، دوبلکس و گروهی تا 8 آسانسور<br />حرکت شیرجه ای واقعی بواسطه سیستم یکپارچه کنترلی و شمارش پالس های انکدر<br />ارتباط سریال با کابین به صورت CAN BUS<br />محصولی که در 30 کشور پیشرفته جهان استفاده می شود.<br />دارای گواهینامه CE<br />ویژه برجهای مسکونی ، اداری و تجاری<br />شناسایی موقعیت کابین با انکدر<br />قابلیت ADO و حرکت در طبقات با ارتفاع کم<br />AUTO RELEVELING<br />ایجاد بهترنی منحنی حرکتی به صورت خودکار < br />'
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