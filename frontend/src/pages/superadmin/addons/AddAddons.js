import React from 'react'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Button, Grid } from '@mui/material';
const AddAddons = () => {
  return (
    <Container maxWidth="lg" sx={{marginTop:3}} >
         <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <Typography sx={{fontWeight:'bold'}}>Manage Addons</Typography>
      </Grid>
      <Grid item xs={6} container justifyContent="flex-end">
        <Button style={{backgroundColor:'#DFA24B',color:'white'}} sx={{padding:'10px'}}>+Add Addons</Button>
      </Grid>
    </Grid>
     <Card sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed turpis ac felis volutpat posuere.
        </Typography>
      </CardContent>
    </Card>
  </Container>
  )
}

export default AddAddons