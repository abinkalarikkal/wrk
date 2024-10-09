import React, { useState } from 'react'
import { Button, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [input, setInput] = useState({
    email:"",
    password: "",
  })

  const navigate=useNavigate();
  const handleChange = (event) => {
    setInput( ...inputData, [event.target.name], event.target.value );222

  const heading = { fontSize: "2rem", fontWeight: "600" };
  const paperStyle = { padding: "2rem", margin: "50px auto", borderRadius: "1rem", boxshadow: "10px 10px" };


  const handleChange = (event) => {
    setInput(...input, [event.target.name], event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Grid align="center">
        <br></br>
        <Paper style={paperStyle} sx={{
          width: {
            xs: "30vw",
            sm: "25vw",
            md: "35vw",
            lg: "23.5vw",
            xl: "20.5vw"
          },
          height: "70vh"
        }}>

          <Typography style={heading} >Login</Typography>
          <br />
          <form>
            <TextField type="text" label="email" value={input.email} onChange={handleChange} variant="filled" sx={{ width: "300px" }} /> <br /> <br />
            <TextField type="password" label="Password" value={input.password} onChange={handleChange} variant='filled' sx={{ width: "300px" }} /> <br /><br />
            <FormControl sx={{ textAlign: "left" }}>
              <label htmlFor='role'><h2>Role:</h2></label>
              <RadioGroup
                row
                aria-labelledby="radio-buttons-group-label"
                defaultValue="user"
                id="role"
                name="radio-buttons-group"
                value={role}
                onChange={handleChange}
              >
                <FormControlLabel value="user" control={<Radio checked={role === 'user'} />} label="User" />
                <FormControlLabel value="admin" control={<Radio checked={role === 'admin'} />} label="Admin" />
              </RadioGroup>
            </FormControl>
            <Link to="/Dashboard">
              <Button variant='contained' type="submit" sx={{ width: "300px" }}>Log in</Button>
            </Link>
            <br></br> <br></br><br></br>
            <Link to='/Signup'>
              Don't have an account? Signup</Link>
            <br></br> <br></br><br></br>
            <Link to="/Home">
              <Button variant='contained' type="submit" sx={{ width: "150px" }}>Back to Home</Button> </Link>
          </form>
        </Paper>
      </Grid>
    </div >
  )
}
}

export default Login
