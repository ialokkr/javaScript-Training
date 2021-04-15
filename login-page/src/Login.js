import React from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
} from "@material-ui/core";
import "./Login.css";
import img11 from "./images/img11.jpg";
function Login() {
  return (
    <div style={{ backgroundImage: `url(${img11})` }}>
      <AppBar position="static" alignitems="center" styles={{ color: "grey" }}>
        <Toolbar>
          <Grid container justify="center" wrap="wrap">
            <Grid item></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className="login-form"
          >
            <Paper
              variant="elevation"
              elevation={5}
              className="login-background"
              
            >
              <Grid item>
                <Typography component="h1" variant="h5">
                 <h2>Login Page Application</h2> 
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                    
                      type="text"
                      placeholder="User name"
                      fullWidth
                      name="username"
                      variant="outlined"
                      required
                      autoFocus
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="password"
                      placeholder="Password"
                      fullWidth
                      name="password"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item>
                    <div styles={{flexFlow:"row wrap"}}>
                      <Button
                        style={{ backgroundColor: "blue", maxWidth:"100px", marginRight:"20px" }}
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                      >
                        Log In
                      </Button>

                      <Button
                        style={{ backgroundColor: "red", maxWidth:"100px", marginLeft:"20px" }}
                        variant="contained"
                        color="secondary"
                        type="submit"
                        className="button-block"
                      >
                        Log out
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
