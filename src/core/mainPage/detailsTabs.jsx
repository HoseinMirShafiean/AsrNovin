import { Box, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';


function DetailsTabs(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  DetailsTabs.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box className='hsn'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab className='titleTabInDetails' {...a11yProps(0)} />
            <Tab className='titleTabInDetails' {...a11yProps(1)} />
            <Tab className='titleTabInDetails' {...a11yProps(2)} />
          </Tabs>
        </Box>
        <DetailsTabs value={value} index={0}>
          Item One
        </DetailsTabs>
        <DetailsTabs value={value} index={1}>
          Item Two
        </DetailsTabs>
        <DetailsTabs value={value} index={2}>
          Item Three
        </DetailsTabs>
      </Box>
    );
  }