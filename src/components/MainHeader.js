import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';

export default function MainHeader() {
  return (
    <Grid container>
       <Grid xs={9}>
        <Box sx={{textAlign:'initial'}}>
           <h3>Welcome Back Isabella!</h3>
           <h4>Check out today's weather information</h4>
        </Box>
        </Grid>
       <Grid xs={1}>
       <Box sx={{textAlign:'end'}}>
         <MoreHorizIcon  sx={{mt:2}} /> 
        </Box> 
      </Grid>
      <Grid xs={2}>
      <Box sx={{textAlign:'initial', mt:1}}>
      <Avatar sx={{borderRadius: 2 }} variant="square" alt="SAM" src="/static/images/avatar/1.jpg" />
      </Box>
      </Grid>
    </Grid>
  )
}

