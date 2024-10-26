import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Cards() {
    const navigate = useNavigate();
    
    return (
        <Grid container className="BoxInCardproducts">
            <Grid item>
                <Box className="ImageColorInProuduct firstCardInProducts"
                    onClick={() => navigate('تابلو فرمان هیدرولیک')}>
                </Box>
                <h3 className="TitleInCardproducts">تابلو فرمان هیدرولیک</h3>
            </Grid>
        </Grid>
    )
}
