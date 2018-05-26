import React from "react";
import { Dropdown, Button, NavItem } from "react-materialize"


const DropDown = props => (
    <div id="help-dropdown">
        <Dropdown trigger={
            <Button>...</Button>
        }>
        <NavItem href = "/profile">Profile</NavItem>
        <NavItem>Saved</NavItem>
        <NavItem divider />
        <NavItem href="/">Logout</NavItem>
        </Dropdown>
    </div>
)

export default DropDown;

