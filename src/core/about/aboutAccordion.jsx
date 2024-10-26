import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import { aboutAccordion } from '../DTO/about';

const dot = [
  {
    id: 0,
    title: aboutAccordion.cards.one.title,
    file: aboutAccordion.cards.one.file
  },
  {
    id: 1,
    title: aboutAccordion.cards.two.title,
    file: aboutAccordion.cards.two.file
  },
  {
    id: 2,
    title: aboutAccordion.cards.three.title,
    file: aboutAccordion.cards.three.file
  },
  {
    id: 3,
    title: aboutAccordion.cards.four.title,
    file: aboutAccordion.cards.four.file
  },
  {
    id: 4,
    title: aboutAccordion.cards.five.title,
    file: aboutAccordion.cards.five.file,
    className: 'marginButtonAbout'
  },
]

export default function AboutAccordion() {
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
        <Typography>{item.file}</Typography>
      </AccordionDetails>
    </Accordion>
    </Grid>
  )
}