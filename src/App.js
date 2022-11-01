import './App.css';
import MainHeader from './components/MainHeader';
import MainCard from './components/MainCard';
import WeatherDetails from './components/WeatherDetails';
import { Box } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import Side from './components/Side';

function App() {

  return (
    <Box className="App">
      <Grid container spacing={2} sx={{width:'150vh',align:'center',ml:30,mt:0.5,background:'#5C9CE5',borderRadius:15}}>
          <Grid xs={3} className="sideNav"sx={{m:0}} >
              <Side/>
            {/* <img className='wimage' src="../images/images.jpeg" alt="Stickman" width="250" height="325" /> */}

          </Grid>
          <Grid xs={9} className='main'>
            <Grid container spacing={2} sx={{background:'#E4F1FF',borderRadius:15}}>
              <Grid xs={12}>
                <MainHeader />
              </Grid>
              <Grid  xs={12}>
                <MainCard />
              </Grid>
              <Grid  xs={12}>
              <WeatherDetails />
              </Grid>
            </Grid>
          </Grid>
       </Grid>
    </Box>
  );
}

export default App;

