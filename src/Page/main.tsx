import React from 'react';
import Card from '../Component/Frame/card'
import Grid from '@mui/material/Unstable_Grid2';
import '../Component/Css/basic.css'
import Box from '@mui/material/Box';
function App() {

return(

  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Card />
      <Card />
      <Card />
    </Grid>
  </Box>

)



}

export default App;
