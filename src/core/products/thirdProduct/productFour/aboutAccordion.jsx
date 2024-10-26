import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';

const dot = [
    {
        id: 0,
        title: 'مشخصات تابلو فرمان مدل  NETLIFT:',
        file: 'سرویس دهی تا 32طبقه با یک تراول کابل 16 رشته . <br />قابل استفاده برای موتورهای سنکرون و آسنکرون. <br />کنترل آسانسور به صورت سیمپلکس ، دوبلکس ، سلکتیو و کلکتیو <br />دارای مود های : «نرمال» ، «رویزیون» ، «تست اتوماتیک و دستی» ، «تنظیمات» ، <br />«آمارو خطا یابی» ، VIPو مود آتش نشانی <br />قابلیت راه اندازی به صورت sensorless (بدون سنسور دور انداز) <br />دارای قابلیت Releveling Automaticدر سیستم های کششی و هیدرولیک (لول اتوماتیک مجدد) <br />دارای قابلیت کاربردی Canceling شاسی های احضار. <br />دارای قابلیت کاربردی ADO با مدارهای استاندارد. <br />ثبت 100خطای آخر به همراه زمان ، تاریخ ، مکان و جهت وقوع خطا <br />استفاده از قطعات الکتریکی و الکترونیکی با کیفیت جهت طول عمر بالا و خرابی کم. <br />جامع ترین و کاملترین منوی تنظیمات آسانسور در ایران . <br />احضار کابین از طریق صفحه کلیدیا پنل تنظیمات برد اصلی نمایش دایمی وضعیت سری استوپ در LCD <br />کنترل تا 4 درب آسانسور. <br />دارای برنامه تعیین طبقه پارک به صورت : دستی ، تعیین جدول هفتگی ، آمارگیری هوشمند. <br />امکان محدود کردن آسانسور برای طبقات به صورت نرم افزاری. <br />یکسال گارانتی ، 10سال خدمات پس از فروش. <br />طول عمر متوسط محصولات عصرنوین حداقل 10 سال می باشد. <br />مجهز به سیستم اصلاح فاز هوشمند که تغییرات فاز شبکه را بطور اتوماتیک اصلاح میکند. <br />توانایی کنترل مولتی اسپید جهت بهینه سازی حرکت آسانسور در طبقات با ارتفاع کم (SHORT)FLOORو جلوگیری از اتلاف زمان در دور اندازی ) <br />عملکرد در فاز یک و دو آتش نشانی <br />قابل تنظیم برای طبقات کوتاه برای هر طیقه به صورت جداگانه <br />تنظیم زمان فعالیت فن موتور <br />نصب بسیار آسان و سریع و عیب یابی هوشمند از برجسته ترین مزیتهای این سیستم است <br />'
    },
    {
        id: 1,
        title: 'ویژگی‌های تابلو فرمان NETLIFT با درایو MONARCH:',
        file: 'پیشرفته، مطمئن، قدرتمند و کنترل دقیق آسانسور<br />حفاظت های پیشرفته<br />قابلیت راه اندازی با انواع مختلف انکدر<br />دارای پارامتر های مختلف در هر مد حرکتی<br />'
    },
    {
        id: 2,
        title: 'ویژگی‌های تابلو فرمان NETLIFT با درایو YASKAWA :',
        file: 'برند برتر جهانی<br />طول عمر بالا<br />استاندارد اروپایی CE<br />انعطاف پذیری بسیار بالا و قابلیت تنظیم با تمام موتورهای موجود در بازار<br />'
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