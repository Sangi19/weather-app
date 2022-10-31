import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Grid } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';

export default function Cards() {
  return (

    <Card sx={{borderRadius:4}}>
    <CardActionArea>
        
        <CardContent>
              <Box>
                <h4>Humidity <OpacityOutlinedIcon  fontSize="small" sx={{ml:15}}/></h4>
                
                </Box>        
                <Box sx={{textAlign:'center'}}>
                <h4 align='center'>82% bad</h4>
                                      <Grid container spacing={1}>
                        <Grid xs={4}>
                        <label>good</label>
                    <LinearProgress sx={{mt:1,ml:2,width:40,borderRadius:2}} variant="determinate" value={100} />                
                          </Grid>
                          <Grid xs={4}>
                          <label>normal</label>
                    <LinearProgress sx={{mt:1,ml:2,width:40,borderRadius:2}}variant="determinate" value={100} />                
                    </Grid>
                          <Grid xs={4}>  
                   <label>bad</label>                  
                    <LinearProgress sx={{mt:1,ml:2,width:40,borderRadius:2}} variant="determinate" value={40} />                
                    </Grid>
                    </Grid>
                    </Box>
        </CardContent>
    </CardActionArea>
</Card>
  )
}
