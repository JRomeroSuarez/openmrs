import React from 'react'
import {Grid,Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import DataTable from "../components/DataTable";


const DataPage = () => {
    const tabs = [
        {
            labelTab: "Study 1",
        },
        {
            labelTab: "Home",
            linkTab: "/",
        },
        {
            labelTab: "Forms",
            linkTab: "/study/Study 1/forms",
        },
        {
            labelTab: "Participants",
            linkTab: "/study/Study 1/participants"
        }
    ];
    return (
        <AppFrame tabs={tabs}>
            <Grid item style={{marginTop: "5em"}}>
                <Grid container item direction={"column"} style={{marginBottom: "2em", padding: "10px"}}>
                    <Typography variant={"h3"} align={"center"}>Forms del Study 1</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>
            <Grid container
                  direction={"column"}
                  justify="center"
                  style={{margin: "2em", padding: "10px"}}>
                <Grid item>
                    <DataTable/>
                </Grid>
            </Grid>


        </AppFrame>
    )
}

export default DataPage