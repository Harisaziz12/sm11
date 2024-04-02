import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const SystemSetting = () => {
  // Constants for text field labels
  const fieldLabels1 = {
    systemname: 'System Name',
    systemtitle: 'System Title',
    navbartitle: 'Navbar Title',
    systememail: 'System Email',
    phone: 'Phone',
    fax: 'Fax',
    systemlanguage: 'System Language',
    address: 'Address',
    frontview: 'Front View',
    timezone: 'Timezone',
    footertext: 'Footer Text',
    footerlink: 'Footer Link',
    helplink: 'Help Link',
    youtubeapilink: 'Youtube API Link',
    vimeoapilink: 'Vimeo API Link',
  };

  const fieldLabels2 = {
    email: 'Email',
    password: 'Password',
  };

  const [formData1, setFormData1] = useState({
    systemname: '',
    systemtitle: '',
    navbartitle: '',
    systememail: '',
    phone: '',
    fax: '',
    systemlanguage: '',
    address: '',
    frontview: '',
    timezone: '',
    footertext: '',
    footerlink:'',
    systemtitle: '',
    helplink:'',
    youtubeapilink: '',
    vimeoapilink:'',
  });

  const [formData2, setFormData2] = useState({
    email: '',
    password: '',
  });

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data or perform any necessary actions
    console.log("Form 1 Data:", formData1);
    console.log("Form 2 Data:", formData2);
  };

  return (
    <Grid container sx={{marginTop:'20px'}} >
      <Grid item lg={6} md={12} order={{ lg: 0 }}>
        <Container maxWidth="lg">
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography sx={{fontWeight:'bold'}} gutterBottom>
              System Setting
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {Object.keys(formData1).map((key) => (
                  <Grid item xs={12} sm={12} md={12} key={key}>
                    <Typography variant="subtitle1" gutterBottom>
                      {fieldLabels1[key]}
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name={key}
                      value={formData1[key]}
                      onChange={handleChange1}
                    />
                  </Grid>
                ))}
              </Grid>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
            </form>
          </Paper>
        </Container>
      </Grid>
      <Grid item lg={5} md={12} order={{ lg: 1 }}>
        <Container maxWidth="lg">
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography sx={{fontWeight:'bold'}}  gutterBottom>
              Product Update
            </Typography>
            <input type="file" id="file" />
            <Button variant="contained" sx={{backgroundColor:'#DFA24B',marginBottom:'20px'}}>
        Update
      </Button>
      
      <br />
      <Typography sx={{backgroundColor:'#556EE6',padding:'10px 20px 10px 20px'}} variant="caption" display="block">
        Maximum upload size: 2048MB
      </Typography>
      <br />
      <Typography sx={{backgroundColor:'#556EE6',padding:'10px 20px 10px 20px'}} variant="caption" display="block">
        Post: max size: 2048MB
      </Typography>
      <br />
      <Typography sx={{backgroundColor:'#F65E5E',padding:'10px 20px 10px 20px'}} variant="caption" display="block">
        "post_max_size" Has to be bigger than "upload_max_filesize"
      </Typography>
      <br />
      
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}

export default SystemSetting;
