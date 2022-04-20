import React from 'react'
import {Grid, Paper, Avatar,TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';


const SignUp = () => {
    const paperStyle={padding :20, height: '75vh', width: 350, margin:"20px auto" }
    const avtStyle={backgroundColor: '#3d3db1'}
    const buttonStyle={backgroundColor: '#6420b5', color: 'white', padding: '8px 30px', margin:'20px 0'}
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
           <Grid align='center'>
           <Avatar style={avtStyle}>O</Avatar>
            <h2>Sign Up</h2>
               </Grid> 
               <TextField label='Username' placeholder='Enter Username ' fullWidth required></TextField>
               <TextField label='Email' placeholder='Enter your Email ' fullWidth required></TextField>
               <TextField label='Password' placeholder='Enter Password ' fullWidth required type='password'></TextField>
               <TextField label='Re-Type Password' placeholder='Enter Password again' fullWidth required type='password'></TextField>
        <div
        style={{display: 'flex', justifyContent:'center'}}>
        <button type ='submit' style={buttonStyle} justify-content= 'center' fullWidth required >Sign Up</button>
        </div>
        
        
        <Link to="/login">Already Registered? Login </Link>
        
      </Paper>
    </Grid>
  )
}

export default SignUp