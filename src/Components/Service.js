import React from 'react'
import "../Components/Service.css";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ServiceRightPartText from './ServiceRightPartText';
import { allWorks } from './ServiceAllWorksItems';
import { webSites } from './ServiceWebSitesItems';

import TabDemo from "../Components/ResponsiveService";
export default function Service() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   return (
   
    <>
    <div className="tabdemo">
    <TabDemo/>
    </div>
   <div className='desktopService'>
   <div className='service_page'>
   <TabContext value={value}>
   
    
   <div className='service_page_left_part'>
     <div className='left_part_wrapper'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' ,color:"white"}}>
      <TabList onChange={handleChange} aria-label="lab API tabs example" style={{flexDirection:"column"}}>
            <Tab label="All Works" value="1" />
            <Tab label="Websites" value="2" />
            <Tab label="Brends" value="3" />
            <Tab label="Arxitektura" value="4" />
            <Tab label="Settings" value="5" />
          </TabList>
      </Box>
      
     </div>
    </div>
    <div className='service_page_right_part'>
      
     <TabPanel value='1'>
   
     {allWorks.map((item)=>{
        return <ServiceRightPartText item={item}/>
     })}
     </TabPanel>
     <TabPanel value='2'>
     {webSites.map((item)=>{
       
       return <ServiceRightPartText item={item}/>
     })}
     </TabPanel>
    </div>
   </TabContext>
    
   </div>
   </div>
  
    </>
  )
}
