import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Grid } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

export default function Rain() {
  return (

    <Card sx={{borderRadius:4}}>
               
          <CardContent sx={{mt:-3}}>
                <Box>
                  <h4>Chance of rain <CloudOutlinedIcon  fontSize="small" sx={{ml:11,backgroundColor:'#5C9CE5',color:'#FFFFFF',p:0.5, borderRadius:2}}/></h4>                  
                </Box>      

                <Box sx={{textAlign:'center'}}>
                  <h4 align='center'>42%</h4>
                    <Grid container spacing={1} sx={{ml:1}}>
                      <Grid xs={2}>
                        <label>0%</label>
                      </Grid>

                      <Grid xs={2}>
                        <label>25%</label>
                      </Grid>

                      <Grid xs={2}>  
                        <label>50%</label>                  
                      </Grid>
                      <Grid xs={2}>
                        <label>75%</label>
                      </Grid>

                      <Grid xs={2}>  
                        <label>100%</label>                  
                      </Grid>
                    </Grid>
                    <LinearProgress sx={{mt:1,ml:2,width:185,borderRadius:2}} variant="determinate" value={42} />                
                     </Box>
            </CardContent>
     
    </Card>
  )
}
