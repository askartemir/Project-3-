import React from "react";
import Button from 'react-materialize';

export default class SubmitButton extends React.Component
{
    handleClick = () => 
    {
        console.log("Button has been clicked");
    }

    render()
    {
        return(
            
            <Button handleClick={this.handleClick}>button</Button>
        );
    }
}