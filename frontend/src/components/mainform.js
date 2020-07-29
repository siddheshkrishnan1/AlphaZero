import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, Select, MenuItem } from '@material-ui/core';



export class Mainform extends Component {
    continue = e => {
        e.preventDefault();
    }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <p>How many rooms in your residence are you planning on storing? <TextField></TextField></p>
                    <p>Size of your residence? (sqft) <TextField></TextField></p>
                    <p>How packed is your residence (1 - lean 10 - hoarder) <Select>
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                        <MenuItem>4</MenuItem>
                        <MenuItem>5</MenuItem>
                        <MenuItem>6</MenuItem>
                        <MenuItem>7</MenuItem>
                        <MenuItem>8</MenuItem>
                        <MenuItem>9</MenuItem>
                        <MenuItem>10</MenuItem></Select></p>
                    <p>Will you be accessing your storage unit often? <Select>
                        <MenuItem>yes</MenuItem>
                        <MenuItem>no</MenuItem></Select></p>
                    <Button>Calculate</Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Mainform