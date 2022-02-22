import React, { Component } from 'react';

export class LinkButton extends Component{
    render(){
        return(
            <a href={this.props.url}>{this.props.title}</a>
        )
    }
}