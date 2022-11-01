import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import AirIcon from '@mui/icons-material/Air';

export default function Wind() {
  return (

    <Card sx={{borderRadius:4}}>
          <CardContent sx={{mt:-3}}>
                <Box>
                  <h4>Wind <AirIcon  fontSize="small" sx={{ml:19,backgroundColor:'#5C9CE5',color:'#FFFFFF',p:0.5, borderRadius:2}}/></h4>                  
                </Box>      

                <Box sx={{textAlign:'center'}}>
                  <h4 align='center'>8 km/h</h4>
                  <Grid container spacing={1}>
                      <Grid xs={2} spacing={1}>
                        <label>0</label>
                        <LinearProgress sx={{mt:1,ml:2,width:38,borderRadius:2}} variant="determinate" value={100} />                
                      </Grid>

                      <Grid xs={2} >
                        <label>5</label>
                        <LinearProgress sx={{mt:1,ml:2,width:38,borderRadius:2}}variant="determinate" value={100} />                
                      </Grid>

                      <Grid xs={2}>  
                        <label>10</label>                  
                        <LinearProgress sx={{mt:1,ml:2,width:38,borderRadius:2}} variant="determinate" value={0} />                
                      </Grid>
                      <Grid xs={2}>
                        <label>20</label>
                        <LinearProgress sx={{mt:1,ml:2,width:38,borderRadius:2}}variant="determinate" value={0} />                
                      </Grid>

                      <Grid xs={2}>  
                        <label>30</label>                  
                        <LinearProgress sx={{mt:1,ml:2,width:38,borderRadius:2}} variant="determinate" value={0} />                
                      </Grid>
                      <Grid xs={2}>  
                        <label>40</label>                  
                      </Grid>
                    </Grid>
                </Box>
            </CardContent>
    </Card>
  )
}
