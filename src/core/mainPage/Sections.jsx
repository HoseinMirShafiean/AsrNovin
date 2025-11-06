import { Grid, Box } from "@mui/material";

export default function Sections() {
  return (
    <Grid 
      container 
      alignItems="center" 
      justifyContent="center" 
      spacing={2} 
      sx={{ p: { xs: 2, sm: 4 } }}
    >
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
          >
            <Box
              sx={{
                backgroundColor: "#6d6d6d",
                borderRadius: "20px",
                height: { xs: "240px", sm: "400px" },
                p: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                color: "#fff",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, qui laborum blanditiis quod dolore dignissimos
              molestias ipsum ipsam aliquid totam odio est sapiente cumque
              voluptatem esse rerum doloremque voluptates ea.
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: "#b9b4b4",
                borderRadius: "20px",
                height: { xs: "240px", sm: "400px" },
                p: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              facere natus veniam minima ullam hic necessitatibus cupiditate
              explicabo sed quos? Perferendis, debitis tempore rerum quo
              voluptate aliquam sequi cupiditate suscipit.
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: "#797979",
                borderRadius: "20px",
                height: { xs: "240px", sm: "300px" },
                p: 3,
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                color: "#fff",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis assumenda repellendus voluptatem officiis at, eum
              cumque odit laborum labore in omnis dolor libero nostrum eligendi
              sunt voluptate est quam officia?
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: "#cecece",
                borderRadius: "20px",
                height: { xs: "240px", md: "300px" },
                p: 3,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              placeat dolore accusamus ab totam voluptatum, adipisci ex quod hic
              quisquam enim assumenda quae vitae soluta rerum quis maxime error
              officia!
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: "#5e5e5e",
                borderRadius: "20px",
                height: { xs: "240px", sm: "300px" },
                p: 3,
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                color: "#fff",
              }}
            >
              Lorem ipsum dolor, amet consectetur adipisicing elit. Obcaecati
              facilis debitis voluptatibus, vero consequatur soluta fuga
              praesentium ipsum id saepe sit beatae aliquid. Dolore excepturi,
              cumque libero ex nobis quos.
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
