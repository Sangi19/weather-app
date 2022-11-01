

import Grid from '@mui/material/Unstable_Grid2';
import FeelsLike from './FeelsLike';
import Humidity from './Humidity';
import Precipitation from './Precipitation';
import Rain from './Rain';
import UVindex from './UVindex';
import Wind from './Wind';


export default function WeatherDetails() {
  return (
    <div >
      <h4>More detail of today's weather</h4>
      <Grid container spacing={2} sx={{p:-1,mt:-3}}>
        <Grid xs={4} sx={{minHeight:110}}>
          <Humidity />
        </Grid>
        <Grid xs={4}>
          <Wind />
        </Grid>
        <Grid xs={4}>
          <Precipitation />
        </Grid>
        <Grid xs={4}>
          <UVindex />
        </Grid>
        <Grid xs={4}>
          <FeelsLike />
        </Grid>
        <Grid xs={4}>
            <Rain />
        </Grid>
      </Grid>
    </div>
  );
}
