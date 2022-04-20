import React from 'react'
import {Grid, Paper, Avatar,TextField} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useNavigate,Link } from 'react-router-dom';

const Login = () => {
    const paperStyle={padding :20, height: '75vh', width: 350, margin:"20px auto" }
    const avtStyle={backgroundColor: '#3d3db1'}
    const buttonStyle={backgroundColor: '#6420b5', color: 'white', padding: '8px 30px', margin:'10px 0'}
    let history = useNavigate();

    
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
           <Grid align='center'>
           <Avatar style={avtStyle}>O</Avatar>
            <h2>Sign in</h2>

               </Grid> 
               <TextField label='Username' placeholder='Enter Username ' fullWidth required></TextField>
               <TextField label='Password' placeholder='Enter Password ' fullWidth required type='password'></TextField>
               <FormControlLabel
        control={
          <Checkbox             
            name="checkedB"
            color="primary" />
        }
        label="Remember me" /> 
        <div style={{display: 'flex', justifyContent:'center'}}>
        <button type ='submit' onClick={()=>{history('/Dashboard');
             }} style={buttonStyle} justify-content= 'center' fullwidth required >Sign in</button>
        </div>
        <div><Link to="/login" >Forgot Password? </Link></div>
        <div>
         <Link to="/signUp" >Create new account?</Link>
        </div>
        
        </Paper>
    </Grid>
  )
}

export default Login