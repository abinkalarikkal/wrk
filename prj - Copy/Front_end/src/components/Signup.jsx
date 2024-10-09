import React, { useState } from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phno: "",
    password: "",
  })
  const handleChange = (event) =>
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  const heading={fontSize:"2rem",fontWeight:"600"};
  const paperStyle={padding:"2rem",margin:"50px auto",borderRadius:"1rem",boxshadow:"10px 10px"}
  

  return (
        <div style={{ textAlign: "center" }}>
      <Grid align="center">
      <Paper  style={paperStyle} sx={{width:{
        xs:"30vw",
        sm:"25vw",
        md:"35vw",
        lg:"25.5vw",
        xl:"20.5vw"
      },
      height:"78vh"}}>

      
        <Typography style={heading} >Sign Up</Typography>
        <br></br>
      <form>  
      <TextField type="text" label="email" value={input.email} onChange={handleChange} variant="filled" sx={{width:"300px"}} /> <br /> <br />
      <TextField type="text" label="phno" value={input.phno} onChange={handleChange}  variant="filled" sx={{width:"300px"}} /> <br /> <br />
      <TextField type="text" label="firstname" value={input.firstname} onChange={handleChange} variant="filled" sx={{width:"300px"}} /> <br /> <br />
      <TextField type="text" label="lastname" value={input.lastname} onChange={handleChange} variant="filled" sx={{width:"300px"}} /> <br /> <br />
      <TextField type="password" label="password" value={input.password} onChange={handleChange}  variant="filled" sx={{width:"300px"}}/> <br /><br />
      <Link to='/Login'>
      <Button variant='contained' type="submit" sx={{width:"300px"}}>Sign Up</Button>
      </Link>
      <br></br>  <br></br>  
      <Link to='/Login'>
      Already have an account? Login</Link>
      <br></br><br></br>
      <Link to="/Home">
              <Button variant='contained' type="submit" sx={{ width: "150px" }}>Back to Home</Button> </Link>
      </form>
      </Paper>
    </Grid>
    </div>
  )
}
export default Signup
