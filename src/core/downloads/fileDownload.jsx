import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { fileDownloads } from '../DTO/downloads';


const dot = [
  {
    id: 0,
    title: fileDownloads.cards.one.title,
    file: '/src/pdf/Catalog-Asli-Print.pdf',
  },
  {
    id: 1,
    title: fileDownloads.cards.two.title,
    file: '/src/pdf/NETLIFT-دفترچه-راهنمای-سری-نت-لیفت-ورژن-1.pdf',
    file: '/src/pdf/NETLIFT-دفترچه-راهنمای-سری-نت-لیفت-ورژن-2-.pdf',
    file: '/src/pdf/NETLIFT-دفترچه-راهنمای-نت-لیفت-ورژن-3-.pdf'
  },
  {
    id: 2,
    title: fileDownloads.cards.three.title,
    file: '/src/pdf/QUICK-دفترچه-راهنمای-سری-کوییک-ورژن-1.pdf',
    file: '/src/pdf/774_44817832145805.pdf'
  },
  {
    id: 3,
    title: fileDownloads.cards.four.title,
    file: '/src/pdf/UNIVERSAL-دفترچه-راهنمای-سری-یونیورسال-.pdf'
  },
  {
    id: 4,
    title: fileDownloads.cards.five.title,
    file: '/src/pdf/BLACK-OUT-دفترچه-راهنمای-نجات-اضطراری-ورژن-2-.pdf'
  },
  {
    id: 5,
    title: fileDownloads.cards.six.title,
    file: '/src/pdf/M-01-07-02.pdf'
  },
  {
    id: 6,
    title: fileDownloads.cards.seven.title,
    file: '/src/pdf/MIDLIFT-دفترچه-راهنمای-سری-میدلفت.pdf'
  },
]

export default function FileDownload() {
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
    <Accordion className='listInDownload'>
      <AccordionSummary
        className='listBoxInDownload'
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>{item.title}</Typography>
      </AccordionSummary>
      <AccordionDetails className='boxListInDownload'>
        {/* <Worker workerUrl={item.file}>
          <div key={item.index}>
            <Viewer fileUrl={item.file} />
          </div>
        </Worker> */}

        {/* <embed key={item.index} src={item.file} width="100%" height="100px" type="application/pdf" /> */}

        
        {/* <object key={item.index} data={item.file} type="application/pdf" width="100%" height="500px">
          <p>Your browser does not support PDFs. Download the PDF to view it: <a href={item.file}>Download PDF</a>.</p>
        </object> */}
      </AccordionDetails>
    </Accordion>
  )
}