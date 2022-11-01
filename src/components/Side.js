import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NearMeOutlinedIcon  from '@mui/icons-material/NearMeOutlined';
import Switch from '@mui/material/Switch';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import  FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Side() {
  return (
    <div>
     <Grid container spacing={2} sx={{mt:2,ml:2,color:'white'}}>
            <Grid xs={1}>
                   <AddBoxIcon sx={{color:'white'}}/>
            </Grid>
            <Grid xs={7} sx={{align:'center'}}>
                  <Box  sx={{ml:7,color:'white'}}>
                        <FiberManualRecordIcon sx={{ fontSize: 18 }}/>
                        <FiberManualRecordIcon sx={{ fontSize: 15 }}/>
                        <FiberManualRecordIcon sx={{ fontSize: 15 }}/>
                  </Box>
            </Grid>
            <Grid xs={4}>
            °c
                   <Switch  size="small" />°F
            </Grid>
            <Grid xs={7}  sx={{ml:1}}>
               <h5><NearMeOutlinedIcon/>New York,USA</h5>
            </Grid>
            <Grid xs={1}>
                   <WbTwilightIcon sx={{mt:3}}/>            
            </Grid>
            <Grid xs={3} sx={{mt:1}}>
                   <h6>07:19</h6>
            </Grid>
            <Grid xs={7} sx={{ml:1}}>
                <h5>Today 31 Oct</h5>
            </Grid>
            <Grid xs={1}>
                  <WbTwilightIcon sx={{mt:3}}/>            
            </Grid>
            <Grid xs={3} sx={{mt:1}}>
                  <h6>07:19</h6>
            </Grid>

            <Grid xs={1} sx={{mt:6}}>
                   <ChevronLeftIcon fontSize='large'/>
            </Grid>
            <Grid xs={8} sx={{textAlign:'center', ml:2,fontSize:75,mt:2}}>
              27°
            </Grid>
            <Grid xs={2} sx={{mt:6,ml:-2}}>
                  <ChevronRightIcon fontSize='large'/>
            </Grid>

            <Grid container sx={{mt:1}}>
                  <Grid xs={5} >
                         <WbSunnyOutlinedIcon sx={{ml:8}}/>
                  </Grid>
                  <Grid xs={5}>
                         <span >Sunny</span>
                  </Grid>
            </Grid>
      </Grid>  
      <Grid sx={{ml:-1,mt:5,mb:-2}}>
            <img className='wimage' src="../images/images.jpeg" alt="Stickman" width="270" height="370" sx={{borderRadius:200}}/>
      </Grid>    
    </div>
  );
}
