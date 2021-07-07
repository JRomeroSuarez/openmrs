import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import DataTable from "../components/DataTable";
import {useLocation} from "react-router-dom";

import {headTable, reports} from "../data/reports";

const DataPage = () => {

    const location = useLocation();
    let path_array = location.pathname.split("/");
    const tabs = [
        {
            labelTab: path_array[path_array.length - 3],
            linkTab: "/study/" + path_array[path_array.length - 3] + "/forms",
        },
        {
            labelTab: "Home",
            linkTab: "/",
        },
        {
            labelTab: "Forms",
            linkTab: "/study/" + path_array[path_array.length - 3] + "/forms",
        },
        {
            labelTab: "Participants",
            linkTab: "/study/" + path_array[path_array.length - 3] + "/participants",
        }
    ];

    return (

        <AppFrame tabs={tabs}>

            <Grid item style={{marginTop: "5em"}}>
                <Grid container item direction={"column"} style={{marginBottom: "2em", padding: "10px"}}>
                    <Typography variant={"h3"} align={"center"}>Form
                        de {path_array[path_array.length - 1]}</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>
            <Grid container
                  direction={"column"}
                  justify="center"
                  style={{margin: "2em", padding: "10px"}}>
                <Grid item>
                    <DataTable rows={reports} columns={headTable}/>
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default DataPage