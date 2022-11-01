import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Grid } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

export default function Precipitation() {
  return (

    <Card sx={{borderRadius:4}}>
          <CardContent sx={{mt:-3}}>
                <Box>
                  <h4>Precipitation <CloudOutlinedIcon  fontSize="small" sx={{ml:12, backgroundColor:'#5C9CE5',color:'#FFFFFF',p:0.5, borderRadius:2}}/></h4>                  
                </Box>      

                <Box sx={{textAlign:'center'}}>
                  <h3 align='center'>1.4 cm</h3>
                    <Grid container spacing={1} sx={{ml:2}}>
                      <Grid xs={1}>
                        <label>0</label>
                        <LinearProgress sx={{mt:1,ml:1,width:10,borderRadius:2}} variant="determinate" value={100} />                
                      </Grid>

                      <Grid xs={1}>
                        <label>10</label>
                        <LinearProgress sx={{mt:1,ml:1,width:10,borderRadius:2}}variant="determinate" value={50} />                
                      </Grid>

                      <Grid xs={1}>  
                        <label>20</label>                  
                        <LinearProgress sx={{mt:1,ml:1,width:10,borderRadius:2}} variant="determinate" value={0} />                
                      </Grid>

                      <Grid xs={1}>
                        <label>30</label>
                        <LinearProgress sx={{mt:1,ml:1,width:10,borderRadius:2}} variant="determinate" value={0} />                
                      </Grid>

                      <Grid xs={1}>
                        <label>40</label>
                        <LinearProgress sx={{mt:1,ml:1,width:10,borderRadius:2}}variant="determinate" value={0} />                
                      </Grid>

                      <Grid xs={1}>  
                        <label>50</label>                  
                        <LinearProgress sx={{mt:1,ml:1,width:10,borderRadius:2}} variant="determinate" value={0} />                
                      </Grid>

                      <Grid xs={1}>
                        <label>60</label>
                        <LinearProgress sx={{mt:1,ml:1,width:10,borderRadius:2}} variant="determinate" value={0} />                
                      </Grid>

                      <Grid xs={1}>
                        <label>70</label>
                        <LinearProgress sx={{mt:1,ml:1,width:10,borderRadius:2}}variant="determinate" value={0} />                
                      </Grid>

                      <Grid xs={1}>  
                        <label>80</label>                  
                        <LinearProgress sx={{mt:1,ml:1,width:10,borderRadius:2}} variant="determinate" value={0} />                
                      </Grid>

                      <Grid xs={1}>  
                        <label>90</label>                  
                        <LinearProgress sx={{mt:1,ml:1,width:10,borderRadius:2}} variant="determinate" value={0} />                
                      </Grid>

                    </Grid>
                  </Box>
            </CardContent>
    </Card>
  )
}
