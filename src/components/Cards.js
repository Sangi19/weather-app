import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

export default function Cards() {
  return (

    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Humidity
            </Typography>
                {/* icon needed */}
            <Typography variant="body2" color="text.secondary">
                <h4>82% percentage</h4>
                <div>
                    <label>good</label>
                    <LinearProgress variant="determinate" value={100} />                
                </div>
                <div>
                    <label>normal</label>
                    <LinearProgress variant="determinate" value={100} />                
                </div>
                <div>
                    <label>bad</label>
                    <LinearProgress variant="determinate" value={30} />                
                </div>
            </Typography>
        </CardContent>
    </CardActionArea>
</Card>
  )
}
