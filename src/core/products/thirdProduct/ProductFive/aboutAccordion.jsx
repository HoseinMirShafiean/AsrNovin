import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';

const dot = [
    {
        id: 0,
        title: 'مشخصات عمومی تابلو فرمان مدل QUICK',
        file: 'سرویس دهی تا 16 طبقه با یک تراول کابل 16 رشته فقط به صورت سریال .<br />کنترل آسانسور به صورت سیمپلکس .<br />قابل استفاده برای موتورهای سنکرون و آسنکرون .<br />دارای مود های : «نرمال» ، «رویزیون» ، «تست اتوماتیک و دستی» ، «تنظیمات» ،<br />«آمارو خطا یابی» ، VIPو مود آتش نشانی<br />قابلیت راه اندازی به صورت sensorless (بدون سنسور دور انداز)<br />دارای قابلیت Releveling Automatic در سیستم های کششی و هیدرولیک (لول اتوماتیک مجدد)<br />دارای قابلیت کاربردی Canceling شاسی های احضار .<br />دارای قابلیت کاربردی ADO با مدارهای استاندارد .<br />ثبت 100خطای آخر به همراه زمان ، تاریخ ، مکان و جهت وقوع خطا<br />استفاده از قطعات الکتریکی و الکترونیکی با کیفیت جهت طول عمر بالا و خرابی کم.<br />امکان محدود کردن آسانسور برای طبقات به صورت نرم افزاری .<br />یکسال گارانتی ، 10سال خدمات پس از فروش .<br />طول عمر متوسط محصولات عصرنوین حداقل 10 سال می باشد .<br />مجهز به سیستم اصلاح فاز هوشمند که تغییرات فاز شبکه را بطور اتوماتیک اصلاح میکند .<br />توانایی کنترل مولتی اسپید جهت بهینه سازی حرکت آسانسور در طبقات با ارتفاع کم (SHORT)FLOORو جلوگیری از اتلاف زمان در دور اندازی )<br />عملکرد در فاز یک و دو آتش نشانی<br />قابل تنظیم برای طبقات کوتاه برای هر طیقه به صورت جداگانه<br />تنظیم زمان فعالیت فن موتور<br />نصب بسیار آسان و سریع و عیب یابی هوشمند از برجسته ترین مزیتهای این سیستم است .<br />'
    },
    {
        id: 1,
        title: 'تابلو فرمان QUICK با درایو STANSON:',
        file: 'طراحی استاندارد بر اساس مونارک MD380L<br />دارای حفاظت های ولتاژ و جریان<br />اقتصادی و رقابتی<br />درایو استاندارد IGBT 40<br />'
    },
    {
        id: 2,
        title: 'تابلو فرمان QUICK با درایو QMA:',
        file: 'بهترین درایو موجود پروژه هایی با ارتفاع کم و ظرفیت پایین در مد Open<br />براساس موتورهای گیربکسی طراحی شده و به صورت تخصصی برروی آسانسور و بالابر بر پیاده سازی شده است.<br />'
    },
    {
        id: 3,
        title: 'تابلو فرمان QUICK با درایو UNIQUE:',
        file: 'دارای نرم افزار قوی جهت نرمی حرکت در Start و  Stop<br />دارای وکتور کنترل جهت جبران گشتاور اضافی می‌باشد.<br />'
    },
    {
        id: 4,
        title: 'تابلو فرمان QUICK PLUS (تتا):',
        file: 'دارای مد Close و Open<br />بدون نیاز به خرید کارت انکدر (on board)<br />3 سال گارانتی<br />لولینگ دقیق،حرکت و توقف نرم در مد Close<br />کنتاکتورهای LS<br />'
    },
    {
        id: 5,
        title: 'تابلو فرمان QUICK با درایو HP MONTE:',
        file: 'قابلیت کنترل موتور گیربکس / گیرلس<br />لولینگ دقیق و توقف نرم<br />کنتاکتورهای LS<br />'
    },
]

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