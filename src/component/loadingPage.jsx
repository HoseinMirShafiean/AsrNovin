import React from 'react';
import {Backdrop, Paper} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";


const LoadingPage = () => {

    return (
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={true}
        >
            <Paper elevation={3} className='CenterItem' sx={{padding: '10px'}}>
                <CircularProgress color="inherit" className='TextInLoading'/>
                <span className='TextInLoading'> لطفا چند لحظه صبر نمایید.</span>
            </Paper>
        </Backdrop>
    );
};
export default LoadingPage;