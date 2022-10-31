import './App.css';
import MainHeader from './components/MainHeader';
import MainCard from './components/MainCard';

import WeatherDetails from './components/WeatherDetails';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

let weatherArr=[
  
]

  return (
    <div className="App">

<Grid container spacing={2}>
   <Grid xs={2} className="sideNav">
      <Item>
        <h1>side nav</h1>
      </Item>
    </Grid>
    <Grid xs={10} className='main'>
      <Item>
              <MainHeader />
              <MainCard /> <br/>
              <WeatherDetails /><br/>
              {/* <MoreData /> */}
      </Item>
    </Grid>
  </Grid>



    </div>
  );
}

export default App;

