import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, makeStyles, Toolbar} from "@material-ui/core";
import {COLOR_BLUE} from "../../constants/colors";
import {nameIcons} from "../../constants/icons";
import Grid from "@material-ui/core/Grid";
import NavBarIconButton from "../NavBarIconButton";
import NavBarTabs from "../NavBarTabs";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    tab: {
        marginRight: theme.spacing(2),
    },
    toolbarButtons: {
        marginLeft: "auto",
    }
}));

const NavBar = ({tabs, showIcon, background}) => {
    const classes = useStyles();

    if (showIcon == null) {
        showIcon = true;
    }
    if (background == null) {
        background = COLOR_BLUE;
    }
    if (tabs == null) {
        tabs = [
            {
                labelTab: "Home",
                linkTab: "/",
            },
            {
                labelTab: "XXXX",
                linkTab: "/data",
            },
            {
                labelTab: "YYYY",
                linkTab: "/studies"
            }
        ];
    }
    return (
        <div className={classes.root}>
            <Grid container
                  justify="center">
                <AppBar position="sticky" style={{'background': background}}>
                    <Toolbar variant="dense">
                        <NavBarTabs tabsInfo={tabs}/>
                        <div className={classes.toolbarButtons}>
                            {showIcon && <NavBarIconButton name={nameIcons.USER} color={"inherit"} onClick={() => {
                                window.location.href = '/not/implemented'
                            }}/>}
                        </div>
                    </Toolbar>
                </AppBar>
            </Grid>
        </div>
    );
}

NavBar.propTypes = {
    showIcon: PropTypes.bool,
    tabs: PropTypes.any,
    background: PropTypes.string,
}

export default NavBar