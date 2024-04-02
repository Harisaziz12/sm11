import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';

function RegistrationForm() {
  // Define state for form fields
  const [formData, setFormData] = useState({
    systemtitle: '',
    bannertitle: '',
    bannersubtitle: '',
    pricesubtitle: '',
    faqsubtitle: '',
    facebooklink: '',
    twitterlink: '',
    linkedinlink: '',
    instagramlink: '',
    contactmail: '',
    frontendfootertext: '',
    copyrighttext: '',
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form submission logic here
    console.log('Form submitted:', formData);
  };

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <Container maxWidth="lg">
      <Typography sx={{fontWeight:'bold',margin:'20px 0px 20px 0px'}}>
        Website Setting
      </Typography>
      <Card>
        <CardContent>
          <Typography sx={{fontWeight:'bold'}}  gutterBottom>
            General Setting
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="System Title"
                  name="systemtitle"
                  value={formData.systemtitle}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Banner Title"
                  name="bannertitle"
                  value={formData.bannertitle}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Banner Subtitle"
                  name="bannersubtitle"
                  value={formData.bannersubtitle}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Price Subtitle"
                  name="pricesubtitle"
                  value={formData.pricesubtitle}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="FAQ Subtitle"
                  name="faqsubtitle"
                  value={formData.faqsubtitle}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Facebook Link"
                  name="facebooklink"
                  value={formData.facebooklink}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Twitter Link"
                  name="twitterlink"
                  value={formData.twitterlink}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="LinkedIn Link"
                  name="linkedinlink"
                  value={formData.linkedinlink}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Instagram Link"
                  name="instagramlink"
                  value={formData.instagramlink}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Contact Mail"
                  name="contactmail"
                  value={formData.contactmail}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Frontend Footer Text"
                  name="frontendfootertext"
                  value={formData.frontendfootertext}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Copyright Text"
                  name="copyrighttext"
                  value={formData.copyrighttext}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid item  container justifyContent="flex-start" sx={{marginTop:'10px'}}>
        <Button style={{backgroundColor:'#DFA24B',color:'white'}} sx={{padding:'10px'}}>+Add Addons</Button>
      </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default RegistrationForm;
