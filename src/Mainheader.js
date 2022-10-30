import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';

function Mainheader() {
  return (
    <div>
        <h3>Welcome Back Isabella!</h3>
          <h4>Check out today's weather information</h4>
          <span>            
          <MoreHorizIcon /> 
          {/* <span class="material-icons">e5d3</span> */}
          <Avatar alt="SAM" src="/static/images/avatar/1.jpg" />
          </span>
    </div>
  )
}

export default Mainheader