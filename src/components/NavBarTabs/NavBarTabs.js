import React from 'react';
import PropTypes from 'prop-types';
import {Divider, Grid, Paper, Tab, Tabs} from "@material-ui/core";

const NavBarTabs = ({tabsInfo}) => {
    return (
        <Tabs>
            {tabsInfo.map(tab => (
                <Grid container item direction={"row"}>
                    {tab.isSelected ? (
                            <Grid container item>
                                <Paper elevation={-1}>
                                    <Tab label={tab.labelTab} href={tab.linkTab}/>
                                </Paper>
                                <Divider orientation="vertical" flexItem/>
                            </Grid>) :
                        (
                            <Grid container item>
                                <Tab label={tab.labelTab} href={tab.linkTab}/>
                                <Divider orientation="vertical" flexItem/>
                            </Grid>)}
                </Grid>
            ))}
        </Tabs>
    )
}

NavBarTabs.propTypes =
    {
        tabsInfo: PropTypes.array
    }
export default NavBarTabs;