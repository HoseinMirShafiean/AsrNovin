import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import IntroBild from "../../image/IntroBild.jpg";

export default function InformationBox() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100% !important",
        py: { xs: 3, sm: 10 },
        px: { xs: 2, sm: 4 },
      }}
    >
      <Card
        sx={{
          width: "100% !important",
          //   maxWidth: 900,
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.01)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          },
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            mt: { xs: 2, sm: 3 },
            mb: { xs: 1, sm: 2 },
            fontFamily: "Vazirmatn, sans-serif",
            fontWeight: 700,
            color: "#1976d2",
            fontSize: { xs: "1.4rem", sm: "1.8rem" },
          }}
        >
          References
        </Typography>

        <CardMedia
          component="img"
          src={IntroBild}
          alt="References"
          sx={{
            width: "100% !important",
            height: { xs: 240, sm: 350, md: 470 },
            objectFit: "cover",
            borderRadius:"25px"
          }}
        />

        <CardContent
          sx={{
            textAlign: "center",
            py: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Vazirmatn, sans-serif",
              fontWeight: 600,
              color: "#333",
              mb: 3,
              fontSize: { xs: "1rem", sm: "1.2rem" },
            }}
          >
            GREAT OLYMPIC HILL IN GARMISCH
          </Typography>

          <Grid item>
            <Button
              sx={{
                background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                color: "#fff",
                px: { xs: 3, sm: 4 },
                py: { xs: 0.8, sm: 1 },
                borderRadius: "50px",
                fontFamily: "Vazirmatn, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "0.85rem", sm: "1rem" },
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                "&:hover": {
                  background: "linear-gradient(45deg, #1565c0, #64b5f6)",
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                },
                transition: "all 0.3s ease",
              }}
            >
              hover me
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
