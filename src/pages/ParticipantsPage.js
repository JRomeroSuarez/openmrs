import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import DataTable from "../components/DataTable";
import {useLocation} from "react-router-dom";

import {headTable, participants} from "../data/participants";

const ParticipantsPage = () => {
    const location = useLocation();
    let path_array = location.pathname.split("/");
    const tabs = [
        {
            labelTab: path_array[path_array.length - 2],
            linkTab: "/study/" + path_array[path_array.length - 2] + "/forms",
        },
        {
            labelTab: "Home",
            linkTab: "/",
        },
        {
            labelTab: "Forms",
            linkTab: "/study/" + path_array[path_array.length - 2] + "/forms",
        },
        {
            labelTab: "Participants",
            linkTab: "/study/" + path_array[path_array.length - 2] + "/participants",
        }
    ];
    return (
        <AppFrame tabs={tabs}>
            <Grid item style={{marginTop: "5em"}}>
                <Grid container item direction={"column"} style={{marginBottom: "2em", padding: "10px"}}>
                    <Typography variant={"h3"} align={"center"}>Participants
                        de {path_array[path_array.length - 2]}</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>
            <Grid container
                  direction={"column"}
                  justify="center"
                  style={{margin: "2em", padding: "10px"}}>
                <Grid item>
                    <DataTable rows={participants} columns={headTable}/>
                </Grid>
            </Grid>


        </AppFrame>
    )
}

export default ParticipantsPage