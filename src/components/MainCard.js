import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WeatherChart from './WeatherChart';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';


export default function MainCard() {
  return (
    <Card sx={{borderRadius:4}}>
      <CardContent>
      <Grid container spacing={2} sx={{ml:1}}>
          <Grid xs={6} >
              <h4>Upcoming hours</h4>
          </Grid>
          <Grid xs={6} sx={{mt:2}}>

        <Button variant="contained" disabled size="small"><strong>Rain precipitation</strong> <KeyboardArrowDownIcon/></Button>

        <Button size="small"variant="contained" color='grey' sx={{ml:1}}><strong>Next Days</strong><ChevronRightIcon/> </Button>
          </Grid>
          <Grid container spacing={2} sx={{mt:1,ml:0.5}}>
          <Grid xs={1} sx={{textAlign:'end',ml:1}}>
              <label>Now</label>
              <WbSunnyOutlinedIcon sx={{ml:3,mt:1}}/>
              <label>27°</label>
          </Grid>

          <Grid xs={1} sx={{textAlign:'end',ml:4}}>
                <label>11:00</label>
                <WbSunnyOutlinedIcon sx={{ml:3,mt:1}}/>
                28°
          </Grid>
          <Grid xs={1} sx={{textAlign:'end',ml:4}}>
          <label>12:00</label>
<CloudOutlinedIcon sx={{ml:3,mt:1}}/>
28°
          </Grid>
          <Grid xs={1} sx={{textAlign:'end',ml:4}}>
          <label>13:00</label>
<CloudOutlinedIcon sx={{ml:3,mt:1}}/>
29°
          </Grid>
          <Grid xs={1} sx={{textAlign:'end',ml:3.5}}>
          <label>14:00</label>
<WbSunnyOutlinedIcon sx={{ml:3,mt:1}}/>
30°
          </Grid>
          <Grid xs={1} sx={{textAlign:'end',ml:3.5}}>
          <label>15:00</label>
<CloudOutlinedIcon sx={{ml:3,mt:1}}/>
29°
          </Grid>
          <Grid xs={1} sx={{textAlign:'end',ml:4}}>
          <label>16:00</label>
<CloudOutlinedIcon sx={{ml:3,mt:1}}/>
29°
          </Grid>
          <Grid xs={1} sx={{textAlign:'end',ml:3.5}}>
          <label>17:00</label>
            <WbSunnyOutlinedIcon sx={{ml:3,mt:1}}/>
            28°
          </Grid>
          </Grid>
          <Grid>
            <WeatherChart/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
