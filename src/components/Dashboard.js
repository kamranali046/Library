import React from 'react'

import Navbar from './Navbar'
import Classes from './Classes'


const Dashboard = () => {
    const dashboardStyle={display:'flex', justifyContent:'space-around' }
  return (
   <>
        <Navbar />
        <br></br>

        <div style={dashboardStyle}>
        <Classes title='Chemistry' />
        <Classes title='Physics' />
        <Classes title='English' />
        </div>
        <br></br>
        <div style={dashboardStyle}>
        <Classes title='Maths' />
        <Classes title='Biology' />
        <Classes title='Science' />
        </div>
     </>
  
  );
}

export default Dashboard