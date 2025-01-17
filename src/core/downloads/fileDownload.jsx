import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import { fileDownloads } from '../DTO/downloads';
import PdfViewer from './pdfViewer';

const dot = [
  {
    id: 0,
    title: fileDownloads.cards.one.title,
    file: "../../pdf/774_44817832145805.pdf"
  },
  {
    id: 1,
    title: fileDownloads.cards.two.title,
  },
  {
    id: 2,
    title: fileDownloads.cards.three.title,
  },
  {
    id: 3,
    title: fileDownloads.cards.four.title,
  },
  {
    id: 4,
    title: fileDownloads.cards.five.title,
  },
  {
    id: 5,
    title: fileDownloads.cards.six.title,
  },
  {
    id: 6,
    title: fileDownloads.cards.seven.title,
  },
]

export default function FileDownload() {
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
    <Accordion className='listInDownload'>
      <AccordionSummary
        className='listBoxInDownload'
        expandIcon={<ArrowDownwardIcon />}
        // aria-controls="panel1-content"
      >
        <Typography>{item.title}</Typography>
      </AccordionSummary>
      <AccordionDetails className='boxListInDownload'>
        <PdfViewer pdfFile={item.file} />
      </AccordionDetails>
    </Accordion>
  )
}

