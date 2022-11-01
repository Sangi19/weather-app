import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function MainCard() {
  return (
    <Card sx={{borderRadius:4}}>
      <CardContent>
      <Grid container spacing={2} sx={{ml:1}}>
          <Grid xs={6} >
              <h4>Upcoming hours</h4>
          </Grid>
          <Grid xs={6} sx={{mt:2}}>

        <Button variant="contained" disabled size="small">Rain precipitation <KeyboardArrowDownIcon/></Button>

        <Button size="small"variant="contained" color='grey' sx={{ml:1}}>Next Days<ChevronRightIcon/> </Button>
          </Grid>
        </Grid>


      </CardContent>
    </Card>
  );
}
