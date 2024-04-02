import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, Input, MenuItem, InputLabel } from '@mui/material';

function CreateSchool() {
  // Define state for form fields
  const [formData1, setFormData1] = useState({
    schoolname: '',
    schooladdress: '',
    schoolemail: '',
    schoolphone: '',
    schoolinfo:'',
    schoollogo:'',
  });

  const [formData2, setFormData2] = useState({
    adminname: '',
    gender: 'Male', // Set default value for gender
    bloodgroup: '', // State for blood group
    adminaddressj: '',
    adminphoneno:'',
    adminphoto:'',
    adminemail:'',
    adminpassword:'',
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form submission logic here
    console.log('School Form submitted:', formData1);
    console.log('Admin Form submitted:', formData2);
  };

  // Handle form field changes
  const handleChange1 = (event) => {
    const { name, value } = event.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setFormData2((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (      
    <Container>
      <Typography gutterBottom fontWeight="bold" style={{marginTop:"20px"}}>
        Create School
      </Typography>
      <Grid container spacing={3} style={{backgroundColor:"white",marginTop:"20px"}}>
        <Grid item xs={12} sm={6}>
          <Typography fontWeight="bold" gutterBottom>
            School Info
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="School Name"
                  name="schoolname"
                  value={formData1.schoolname}
                  onChange={handleChange1}
                  required
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="School Address"
                  name="schooladdress"
                  value={formData1.schooladdress}
                  onChange={handleChange1}
                  required
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="email"
                  label="School Email"
                  name="schoolemail"
                  value={formData1.schoolemail}
                  onChange={handleChange1}
                  required
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  label="School Phone"
                  name="schoolphone"
                  value={formData1.schoolphone}
                  onChange={handleChange1}
                  required
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="School Info"
                  name="schoolinfo"
                  value={formData1.schoolinfo}
                  onChange={handleChange1}
                  required
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="school-logo" sx={{ marginTop: 2, display: 'block' }}>School Logo</InputLabel>
                <Input
                  id="school-logo"
                  type="file"
                  name="schoollogo"
                  onChange={handleChange1}
                  required
                  sx={{ border: '1px solid #ccc', padding: '8px' }}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography fontWeight="bold" gutterBottom>
            Admin Info
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Admin Name"
                  name="adminname"
                  value={formData2.adminname}
                  onChange={handleChange2}
                  required
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Gender"
                  name="gender"
                  value={formData2.gender}
                  onChange={handleChange2}
                  required
                  sx={{ marginTop: 2 }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select // Dropdown for blood group
                  fullWidth
                  label="Blood Group"
                  name="bloodgroup"
                  value={formData2.bloodgroup}
                  onChange={handleChange2}
                  required
                  sx={{ marginTop: 2 }}
                >
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Admin Address"
                  name="adminaddressj"
                  value={formData2.adminaddressj}
                  onChange={handleChange2}
                  required
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  label="Admin Phone No"
                  name="adminphoneno"
                  value={formData2.adminphoneno}
                  onChange={handleChange2}
                  required
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="admin-photo" sx={{ marginTop: 2, display: 'block' }}>Admin Photo</InputLabel>
                <Input
                  id="admin-photo"
                  type="file"
                  name="adminphoto"
                  onChange={handleChange2}
                  required
                  sx={{ border: '1px solid #ccc', padding: '8px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="email"
                  label="Admin Email"
                  name="adminemail"
                  value={formData2.adminemail}
                  onChange={handleChange2}
                  required
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Admin Password"
                  name="adminpassword"
                  value={formData2.adminpassword}
                  onChange={handleChange2}
                  required
                  sx={{ marginTop: 2 }}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
        {/* Register button positioned at the bottom right */}
        <Grid item xs={12}>
          <Grid container justifyContent="flex-end">
            <Button type="submit" variant="contained" style={{backgroundColor:'#DFA24B'}} onClick={handleSubmit} sx={{ marginTop: 2 }}>
              Register
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CreateSchool;
