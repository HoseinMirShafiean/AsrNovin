import DownloadDoneOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import { infoCard } from "../../DTO/mainPage";

export default function InfoCard() {
  const dto = [
    {
      id: 0,
      title: infoCard.cards.one.title,
      description: infoCard.cards.one.description,
    },
    {
      id: 1,
      title: infoCard.cards.two.title,
      description: infoCard.cards.two.description,
    },
    {
      id: 2,
      title: infoCard.cards.three.title,
      description: infoCard.cards.three.description,
    },
  ];

  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      spacing={2}
      sx={{ textAlign: "center" }}
    >
      {dto.map((item) => (
        <Grid key={item.id} item xs={12} md={4}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          {item.id === 0 && <EditCalendarOutlinedIcon className="iconInfo" fontSize="large" />}
          {item.id === 1 && <EmojiEventsOutlinedIcon className="iconInfo" fontSize="large" />}
          {item.id === 2 && <DownloadDoneOutlinedIcon className="iconInfo" fontSize="large" />}
          <Typography className="titleInfo" variant="h5" component="div" sx={{ mt: 1 }}>
            {item.title}
          </Typography>
          <Typography className="textInfo" variant="body2" sx={{ mt: 1 }}>
            {item.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
