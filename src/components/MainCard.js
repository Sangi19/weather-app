import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
    import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MainCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Upcoming hours
        </Typography>
      <CardActions>
        <Button disabled size="small">Rain precipitation</Button>
        <Button size="small">Next Days </Button>

      </CardActions>
        <Typography variant="body2" color="text.secondary">
              <tr>
                <td>now</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>

              </tr>
        </Typography>
      </CardContent>
    </Card>
  );
}
