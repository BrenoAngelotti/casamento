import React, { Component } from 'react';
import { Fab } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';

export class LinkButton extends Component{
    render(){
        return(
            <Fab 
                color="primary"
                variant="extended" 
                size="large"
                onClick={() => window.open(this.props.url, '_blank').focus()}>
                    <NavigationIcon sx={{ mr: 1 }}/>
                    {this.props.title}
            </Fab>
        )
    }
}