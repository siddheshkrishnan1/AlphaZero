import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, Select, MenuItem } from '@material-ui/core';



export class Mainform extends Component {
    
    state = {
        rooms: 0,
        size: 0,
        hoard: 0,
        access: ""
    };

    handleChange = event  => {
        this.setState({ [event.target.name]: parseInt(event.target.value) })
        
    };

    handleSubmit = () => {
        console.log(this.state)
    }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <p>How many rooms in your residence are you planning on storing? <TextField name="rooms" onChange={this.handleChange}></TextField></p>
                    <p>Size of your residence? (sqft) <TextField name="size" onChange={this.handleChange}></TextField></p>
                    <p>How packed is your residence (1 - lean 10 - hoarder) <Select name="hoard" value={this.state.hoard} onChange={this.handleChange}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem></Select></p>
                    <p>Will you be accessing your storage unit often? <Select name="access" value={this.state.access}onChange={this.handleChange}>
                        <MenuItem value={1}>yes</MenuItem>
                        <MenuItem value={0}>no</MenuItem></Select></p>
                    <Button onClick={this.handleSubmit}>Calculate</Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Mainform