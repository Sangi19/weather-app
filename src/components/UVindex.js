import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

export default function UVindex() {
  return (

    <Card sx={{borderRadius:4}}>
          <CardContent sx={{mt:-3}}>
                <Box>
                  <h4>UV index <WbSunnyOutlinedIcon  fontSize="small" sx={{ml:13, backgroundColor:'#5C9CE5',color:'#FFFFFF',p:0.5, borderRadius:2}}/></h4>                  
                </Box>      

                <Box sx={{textAlign:'center'}}>
                  <h4 align='center'>4 medium</h4>
                    <Grid container spacing={1} sx={{ml:1}}>
                      <Grid xs={2}>
                        <label>0-2</label>
                        <LinearProgress sx={{mt:1,ml:1,width:25,borderRadius:2}} variant="determinate" value={100} />                
                      </Grid>

                      <Grid xs={2}>
                        <label>3-5</label>
                        <LinearProgress sx={{mt:1,ml:1,width:25,borderRadius:2}}variant="determinate" value={50} />                
                      </Grid>

                      <Grid xs={2}>  
                        <label>6-7</label>                  
                        <LinearProgress sx={{mt:1,ml:1,width:25,borderRadius:2}} variant="determinate" value={0} />                
                      </Grid>
                      <Grid xs={2}>
                        <label>8-10</label>
                        <LinearProgress sx={{mt:1,ml:1,width:25,borderRadius:2}}variant="determinate" value={0} />                
                      </Grid>

                      <Grid xs={2}>  
                        <label>11+</label>                  
                        <LinearProgress sx={{mt:1,ml:1,width:25,borderRadius:2}} variant="determinate" value={0} />                
                      </Grid>
                    </Grid>
                  </Box>
            </CardContent>
    </Card>
  )
}
