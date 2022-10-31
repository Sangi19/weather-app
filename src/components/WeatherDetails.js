
import { Box } from '@mui/system';
import Cards from './Cards';
import Grid from '@mui/material/Unstable_Grid2';


export default function WeatherDetails() {
  return (
    <div>
    <h5>More detail of today's weather</h5>
    <Grid container spacing={2}>
     <Grid xs={4}><Cards /></Grid>
     <Grid xs={4}><Cards /></Grid>
     <Grid xs={4}><Cards /></Grid>
     <Grid xs={4}><Cards /></Grid>
     <Grid xs={4}><Cards /></Grid>
     <Grid xs={4}><Cards /></Grid>
    </Grid>
    </div>
  );
}
