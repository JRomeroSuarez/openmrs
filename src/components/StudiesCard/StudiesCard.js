import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, Grid} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TocIcon from '@material-ui/icons/Toc';
import IconButton from '@material-ui/core/IconButton';
import {nameIcons} from "../../constants/icons";
import AppIconButton from "../AppIconButton";
import {COLOR_SECONDARY} from "../../constants/colors";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: COLOR_SECONDARY,
        borderRadius: 8,
        margin: '10%'
    }
}));
const StudiesCard = ({name, path, description}) => {
    const history = useHistory()

    const onClickHandler = () => {
        history.push(path)
    }
    const classes = useStyles();
    return (
        <Grid item xs={4}
        >
            <Card className={classes.root}>
                <CardHeader
                    action={
                        <AppIconButton name={nameIcons.SETTINGS}/>
                    }
                    title={name}
                />
                <CardContent onClick={onClickHandler}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Grid container direction="row" alignItems="center">
                        <PeopleIcon/> 1000
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <TocIcon/> 2
                    </Grid>

                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="añadir">
                        <AddIcon/>
                    </IconButton>
                    <IconButton aria-label="eliminar">
                        <RemoveIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}
export default StudiesCard;