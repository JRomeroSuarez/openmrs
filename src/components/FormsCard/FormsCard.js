import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, Grid} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TocIcon from '@material-ui/icons/Toc';
import {nameIcons} from "../../constants/icons";
import AppIconButton from "../AppIconButton";
import {COLOR_SECONDARY} from "../../constants/colors";
import {useHistory} from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: COLOR_SECONDARY,
        borderRadius: 8,
        margin: '10%'
    }
}));
const FormsCard = ({name, path, description, responses}) => {
    const history = useHistory()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onClickHandler = () => {
        history.push(path)
    }
    const classes = useStyles();
    return (
        <Grid item xs={4}
        >
            <Card className={classes.root}>
                <CardHeader onClick={onClickHandler}
                            title={name}
                />
                <CardContent>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Grid container direction="row" alignItems="center">
                        <TocIcon/> {responses} responses
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <AppIconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                                   name={nameIcons.SETTINGS}/>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Activate</MenuItem>
                        <MenuItem onClick={handleClose}>Duplicate</MenuItem>
                        <MenuItem onClick={handleClose}>Export</MenuItem>
                        <MenuItem onClick={handleClose}>Program</MenuItem>
                        <MenuItem onClick={handleClose}>Download form</MenuItem>
                    </Menu>
                </CardActions>
            </Card>
        </Grid>
    );
}
export default FormsCard;