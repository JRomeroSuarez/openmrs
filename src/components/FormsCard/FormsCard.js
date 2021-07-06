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

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: COLOR_SECONDARY,
        borderRadius:8,
        margin: '10%'
    }
}));
const FormsCard = ({name, path, responses}) => {
    const history = useHistory()

    const onClickHandler = () => {
        history.push(path)
    }
    const classes = useStyles();
    return (
        <Grid item xs={4}
              >
            <Card className={classes.root}  >
                <CardHeader
                    action={
                        <AppIconButton name={nameIcons.SETTINGS}/>
                    }
                    title={name}
                />
                <CardContent onClick={onClickHandler}   >
                    <Grid container direction="row" alignItems="center">
                        <TocIcon/> {responses} responses
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}
export default FormsCard;