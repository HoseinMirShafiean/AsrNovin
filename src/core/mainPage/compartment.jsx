import { Card, CardContent, Grid, Typography, Button, Box } from "@mui/material";

export default function Compartment() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100vw",
        maxWidth: "100vw",
        margin: 0,
        padding: 0,
        backgroundColor: "#f8f9fa",
        py: { xs: 4, sm: 6 },
      }}
    >
      <Card
        sx={{
          width: "100vw",
          maxWidth: "100vw",
          borderRadius: "20px",
          boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
          textAlign: "center",
          p: { xs: 2, sm: 4 },
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.01)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          },
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Vazirmatn, sans-serif",
              fontWeight: 700,
              color: "#1976d2",
              mb: 2,
              fontSize: { xs: "1.5rem", sm: "1.8rem" },
            }}
          >
            SERVICE
          </Typography>
          <Typography
            sx={{
              fontFamily: "Vazirmatn, sans-serif",
              color: "#555",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              lineHeight: 1.7,
              mb: 4,
              px: { xs: 1, sm: 4 },
            }}
          >
            Do you need manuals or brochures for our products? You can download these in our download area.
            Learn about our training offerings or stay up-to-date with our quarterly NEWsletter.
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontWeight: 500,
                color: "#333",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              SERVICE LINE FST
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#1976d2",
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              +49 (0) 89 - 898 66 - 110
            </Typography>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontWeight: 500,
                color: "#333",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              SERVICE LINE LMS24/7, LMSEleVision, KST
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#1976d2",
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              +49 (0) 89 - 898 66 - 111
            </Typography>
          </Box>
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
        </CardContent>
      </Card>
    </Grid>
  );
}
