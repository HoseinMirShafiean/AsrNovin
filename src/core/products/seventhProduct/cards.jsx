import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Cards() {
    const navigate = useNavigate();

    return (
        <Grid container className="BoxInCardproducts">
            <Grid item>
                <Box className="ImageColorInProuduct firstCardInProducts cursor"
                    onClick={() => navigate('موتور گیرلس CEG ساخت اسپانیا')}>

                </Box>
                <h3 className="TitleInCardproducts">موتور گیرلس CEG ساخت اسپانیا</h3>
            </Grid>
        </Grid>
    )
}
