import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, Grid} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TocIcon from '@material-ui/icons/Toc';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
const StudiesCard = () => {
    const classes = useStyles();
    return (
        <Grid item xs={4}>
            <Card className={classes.root}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <SettingsIcon/>
                        </IconButton>
                    }
                    title="Card 1"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
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