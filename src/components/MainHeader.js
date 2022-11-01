import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';

export default function MainHeader() {
  return (
    <Grid container columnSpacing='0' sx={{p:0,m:-2,ml:1,mt:-3}}>
       <Grid xs={10} sx={{width:600,height:79}} >
        <Box sx={{width:600,height:10}}>
            <h3>Welcome Back Isabella!</h3>
        </Box>
            <p>Check out today's weather information</p>
        </Grid>

        <Grid xs={1} sx={{textAlign:'end',mt:1,ml:2}}>
          <Box >
            <MoreHorizIcon  sx={{mt:2}} /> 
          </Box> 
        </Grid>
        
        <Grid xs={1} sx={{textAlign:'end',mt:2,ml:2}}>
          <Box >
            <Avatar sx={{borderRadius: 3 }} variant="square" alt="SAM" src="/static/images/avatar/1.jpg" />
          </Box>
        </Grid>
    </Grid>
  )
}

