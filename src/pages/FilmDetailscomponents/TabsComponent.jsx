import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


function TabsComponent({summary, rating=[]}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', marginTop:'20px'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList 
          onChange={handleChange} 
          aria-label="lab API tabs example" 
          centered
          >
            <Tab label="Description" value="1" />
            <Tab label="Rate & Review" value="2" />
          </TabList>
        </Box>
        <TabPanel 
           value="1" >
            <div dangerouslySetInnerHTML={{__html: summary}}></div>
        </TabPanel>
        <TabPanel value="2">
            Avarage rating: {rating.average}</TabPanel>
      </TabContext>
    </Box>
  );
}
export default TabsComponent;