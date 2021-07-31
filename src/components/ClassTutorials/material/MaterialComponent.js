import React from 'react'

import ButtonComponent from './ButtonComponent'
import CheckboxComponent from './CheckboxComponent'
import StyledButtonComponent from './StyledButtonComponent'
import TextboxComponent from './TextboxComponent'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { Typography, Container, Paper, Grid,Button} from '@material-ui/core'
import { AppBar,Toolbar,IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import '@fontsource/roboto';


const theme = createTheme({
    palette: {
        primary: {
            main: '#2884f0'
        },
        secondary: {
            main: '#40d50a'
        }

    }
})

export default function MaterialComponent() {
    return (

        <ThemeProvider theme={theme}>
            <Container maxWidth="md" style={{ backgroundColor: '#eee' }}>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <Menu style={{color:'white'}}></Menu>
                    </IconButton>
                    <Typography variant="h6">
                        Material UI
                    </Typography>
                    
                    <Button variant="outlined">Login</Button>
                </Toolbar>
                
            </AppBar>
                <div>
                    <Typography variant="h3" style={{marginTop:100}}>
                        Welcome to Material UI
                    </Typography>
                    <Typography variant="subtitle1">
                        Learn to use Material UI
                    </Typography>
                    <ButtonComponent />
                    <br />
                    <CheckboxComponent />
                    <br />
                    <Grid container spacing={3} justifyContent="center">
                        <Grid xs={12} md={6} item>
                            <Paper style={{ height: 50, width:'100%',backgroundColor:'dodgerblue' }} />
                        </Grid>
                        <Grid item>
                            <Paper style={{ height: 50, width: 100 }} />
                        </Grid>
                        <Grid item>
                            <Paper style={{ height: 50, width: 100 }} />
                        </Grid>
                        <Grid item>
                            <Paper style={{ height: 50, width: 100 }} />
                        </Grid>
                    </Grid>

                    <br />
                    <TextboxComponent />
                    <br></br>
                    <StyledButtonComponent />
                </div>
            </Container>
        </ThemeProvider>

    )
}
