import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "../../image/CarouselImage.jpg";
import { Grid, Button, Box, Typography } from "@mui/material";

export default function ImageSlider() {
  const slides = [
    {
      title: "عصر نوین",
      paragraph: "عصر نوین کیفیتی متمایز",
    },
    {
      title: "کیفیتی متمایز، خدماتی مطمئن",
      paragraph: "پشتیبانی 24 ساعته",
    },
    {
      title: "آسوده باشید",
      paragraph: "آرامش و امنیت در ساختمان",
    },
  ];

  return (
    <Grid
      sx={{
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
      }}
    >
      <Carousel fade interval={4000} controls indicators>
        {slides.map((item, index) => (
          <Carousel.Item key={index}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "350px", sm: "500px", md: "600px" },
              }}
            >
              <img
                src={CarouselImage}
                alt={`slide-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(65%)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.15))",
                }}
              />
            </Box>

            <Carousel.Caption
              sx={{
                position: "absolute",
                top: { xs: "50%", sm: "auto" },
                bottom: { xs: "auto", sm: "15%" },
                transform: { xs: "translateY(-50%)", sm: "none" },
                textAlign: "center",
                px: { xs: 2, sm: 4 },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Vazirmatn, sans-serif",
                  fontWeight: 700,
                  color: "#fff",
                  textShadow: "0 4px 10px rgba(0,0,0,0.6)",
                  fontSize: { xs: "1.2rem", sm: "2rem", md: "2.5rem" },
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  mb: 2,
                  color: "#e0e0e0",
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  textShadow: "0 2px 6px rgba(0,0,0,0.4)",
                }}
              >
                {item.paragraph}
              </Typography>

              <Button
                variant="contained"
                disableElevation
                sx={{
                  background:
                    "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
                  px: { xs: 2.5, sm: 4 },
                  py: { xs: 0.7, sm: 1.2 },
                  fontSize: { xs: "0.75rem", sm: "0.9rem" },
                  fontWeight: 600,
                  fontFamily: "Vazirmatn, sans-serif",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #1565c0 20%, #64b5f6 80%)",
                    transform: "scale(1.04)",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Disable elevation
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Grid>
  );
}
