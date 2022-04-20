import React from 'react'
import {Grid, Paper, Avatar} from '@material-ui/core'



const Classes = (props) => {
    const paperStyle={padding :20,  width: 280, margin:"20px auto", backgroundColor: '#dbd9e1'}
    const avtStyle={backgroundColor: '#3d3db1'}
    const buttonStyle={backgroundColor: '#6420b5', color: 'white', padding: '4px 23px', margin:'21px 59px'}
  return (
    <Grid style={{display:'flex', justifyContent:'space between'}}>
        <Paper elevation={10} style={paperStyle}>
           <Grid align='left'>
           <Avatar style={avtStyle}>O</Avatar>
           <div>
              <h2>{props.title}</h2>
           </div>
           
               </Grid> 
        
        <button type ='submit' style={buttonStyle} justify-content= 'center' fullWidth required >Open</button>        
        
        
            </Paper>
    </Grid>
  )
}

export default Classes