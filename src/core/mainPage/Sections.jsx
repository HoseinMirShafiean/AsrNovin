import { Grid } from "@mui/material";

export default function Sections() {
  return (
    <Grid maxWidth={1300} mb='90px' container alignItems="center">
      <Grid item xs={12} sm={6}>
        <Grid container >
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#6d6d6d",
              height: { xs: "343px", sm: "750px" },
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, qui laborum blanditiis quod dolore dignissimos molestias ipsum ipsam aliquid totam odio est sapiente cumque voluptatem esse rerum doloremque voluptates ea.
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#b9b4b4",
              height: { xs: "343px", sm: "750px" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere natus veniam minima ullam hic necessitatibus cupiditate explicabo sed quos? Perferendis, debitis tempore rerum quo voluptate aliquam sequi cupiditate suscipit.
          </Grid>
        </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container >
            <Grid
              xs={12}
              item
              sx={{
                backgroundColor: "#797979",
                height: { xs: "343px", sm: "375px" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis assumenda repellendus voluptatem officiis at, eum cumque odit laborum labore in omnis dolor libero nostrum eligendi sunt voluptate est quam officia?
            </Grid>
            <Grid
              xs={12}
              item
              sx={{
                backgroundColor: "#cecece",
                height: { xs: "343px", md: "750px" },
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque placeat dolore accusamus ab totam voluptatum, adipisci ex quod hic quisquam enim assumenda quae vitae soluta rerum quis maxime error officia!
            </Grid>
            <Grid
              xs={12}
              item
              sx={{
                backgroundColor: "#5e5e5e",
                height: { xs: "343px", sm: "375px" },
              }}
            >
              Lorem ipsum dolor, amet consectetur adipisicing elit. Obcaecati facilis debitis voluptatibus, vero consequatur soluta fuga praesentium ipsum id saepe sit beatae aliquid. Dolore excepturi, cumque libero ex nobis quos.
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  );
}
