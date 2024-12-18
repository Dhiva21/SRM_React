import React from 'react'
import { Box , Typography} from '@mui/material'
import SideNav from './SideNav'

const Homepage = () => {
  return <>
  <Box sx={{ display: 'flex' }}>
      <SideNav />
      {/* <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          backgroundColor: '#f5f5f5', 
        }}
      >
      
        <Typography variant="h4">Main Content Area</Typography>
        <Typography>Here is where the main content will be displayed!</Typography>
      </Box> */}
    </Box>
</>

}

export default Homepage
