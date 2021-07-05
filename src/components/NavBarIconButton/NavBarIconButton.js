import React from 'react';
import PropTypes from 'prop-types';
import {Button, IconButton, Typography} from '@material-ui/core'
import {getIconByName, iconsByName} from "../../constants/icons";

const NavBarIconButton = ({name, color, size, background, onClick, isDisabled, text}) => {
    if (isDisabled == null) isDisabled = false
    if (text == null) {
        return (
            <IconButton
                aria-label={name}
                color={color}
                size={size}
                style={{backgroundColor: background}}
                disabled={isDisabled}
                onClick={onClick}>
                {iconsByName[name]}
            </IconButton>
        )
    } else {
        return (
            <Button
                variant={"contained"}
                aria-label={name}
                color={color}
                size={size}
                style={{backgroundColor: background}}
                disabled={isDisabled}
                onClick={onClick}>
                <Typography display={"inline"} variant={"body1"} style={{marginRight: "5px" , color:{color}}}>{text}</Typography>
                {iconsByName[name]}
            </Button>)
    }
}

NavBarIconButton.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    text: PropTypes.string,
    size: PropTypes.string,
    background: PropTypes.string,
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
}

export default NavBarIconButton