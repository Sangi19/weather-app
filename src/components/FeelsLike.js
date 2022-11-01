import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Grid, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

export default function FeelsLike() {
  return (

    <Card sx={{borderRadius:4}}>
          <CardContent sx={{mt:-1}}>
                <Box>
                <Typography variant="body1"><b>Feels Like</b> <DeviceThermostatIcon  fontSize="small" sx={{ml:13,backgroundColor:'#5C9CE5',color:'#FFFFFF',p:0.5, borderRadius:2}}/>   </Typography>              

                </Box>      

                <Box sx={{textAlign:'center'}}>
                  <h4 align='center'>30°</h4>
                    <Grid container spacing={1}>
                      <Grid xs={4}>
                        <label>0°</label>
                         </Grid>

                      <Grid xs={4}>
                        <label>25°</label>
                        </Grid>

                      <Grid xs={4}>  
                        <label>50°</label>                  
                        </Grid>
                    </Grid>
                    <LinearProgress sx={{mt:1,ml:2,width:200,borderRadius:2}} variant="determinate" value={62} />                
                     
                  </Box>
            </CardContent>
      
    </Card>
  )
}
