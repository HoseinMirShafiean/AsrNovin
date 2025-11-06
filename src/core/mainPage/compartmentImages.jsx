import { Grid } from "@mui/material";
import CompartmentImage from "../../image/CompartmentImage.png";

export default function CompartmentImages() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        width: "100%",
        py: { xs: 2, sm: 4 },
        backgroundColor: "#f8f8f8",
      }}
    >
      {[1, 2, 3].map((_, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={6}
          md={4}
          display="flex"
          justifyContent="center"
        >
          <a href="#">
            <img
              src={CompartmentImage}
              alt="CarouselImage2"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                transition: "all 0.3s ease",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </a>
        </Grid>
      ))}
    </Grid>
  );
}
