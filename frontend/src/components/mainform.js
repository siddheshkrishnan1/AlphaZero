import React, { Component, useState } from 'react'
import axios from 'axios'


import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, Select, MenuItem } from '@material-ui/core';
import Fivebyfive from './fivebyfive';
import Tenbyten from './tenbyten';
import Tenbytwenty from './tenbytwenty';



export class Mainform extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            rooms: 0,
            size: 0,
            hoard: 0,
            access: "",
            flaskData: "",
            test: ""
        }
        this.changeFlask = this.changeFlask
    }
    changeFlask = () => {
        this.setState({flaskData: ''})
    };


    handleChange = event  => {
        this.setState({ [event.target.name]: parseInt(event.target.value) })
        
    };


    handleSubmit = () => {
        console.log(this.state)
        let arr = [this.state.rooms,this.state.size,this.state.hoard,this.state.access]
        console.log(arr)
        axios.post('/test', arr)
            .then(response => {
                this.setState({test: response.data})
                console.log(this.state.test)
                this.setState({flaskData: '5x5'})

            })
            .catch(error => {
                console.log(error)
            })
        
        

    }
    render() {
        
        switch(this.state.flaskData) {
            case '5x5':
                return ( 
                    <div>
                        <Fivebyfive></Fivebyfive>
                        <Button onClick={this.changeFlask}>Back</Button>
                    </div>
                    )
            case '10x10':
                return (
                    <div>
                        <Tenbyten></Tenbyten>
                        <Button onClick={this.changeFlask}>Back</Button>
                        </div>

                )
            case '10x20':
                return (
                     <div>   
                        <Tenbytwenty ></Tenbytwenty>
                        <Button onClick={this.changeFlask}>Back</Button>
                    </div>
                )
            case '':
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
}


export default Mainform