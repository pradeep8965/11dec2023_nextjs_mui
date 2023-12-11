'use client'
import { LockOutlined } from '@mui/icons-material';
//1. Import area 
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'

let x = createTheme()
//2. Function Defination area 
function Home() {
  return (
   <ThemeProvider theme={x}>
    <Container component="main" maxWidth="xs">
        <Box sx= {{
          marginTop: 8,
          display:"flex",
          flexDirection:"column",
          alignItems: "center"
        }}>
          <Avatar sx={{bgcolor:'#9C27B0', m: 1}}>
            <LockOutlined />
          </Avatar>
          <Typography component= "h1" variant= "h5" sx={{color:'black'}} fontWeight="bold">Sign Up</Typography>
          <Box component="form" sx={{mt:1}}>
            <Grid container>
              <Grid item xs
               sx={{mr:1}}>
                <TextField
                margin='normal'
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                />
              </Grid>
              <Grid item xs
              sx={{ml:1}}>
              <TextField
              margin='normal'
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              />
              </Grid>
            </Grid>
            <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            />
             <TextField
            margin='normal'
            required
            fullWidth
            id='password'
            label='Password'
            name='password'
            autoComplete='Current-Password'
            />
            <FormControlLabel 
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            sx={{color:"gray"}}
            label="I want to receive inspiration, marketing promotions and updates via email."
            />
            <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt:3, mb:2 ,fontWeight: "bold"}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs
              sx={{ml:22.7 , fontWeight: "bold"}}>
                <Link href="#" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
   </ThemeProvider>
  )
}


//3. Export Area 
export default Home;
