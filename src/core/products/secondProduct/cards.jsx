import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Cards() {
    const navigate = useNavigate();

    return (
        <Grid container className="BoxInCardproducts">
            <Grid item>
                <Box className="ImageColorInProuduct firstCardInProducts cursor"
                    onClick={() => navigate('پکیج کامل آسانسور')}>
                </Box>
                <h3 className="TitleInCardproducts">پکیج کامل آسانسور</h3>
            </Grid>
        </Grid>
    )
}
