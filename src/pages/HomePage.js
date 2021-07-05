import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import NavBar from "../components/NavBar";
import Form from "../components/Form";
import DataTable from "../components/DataTable";
import StudiesCard from "../components/StudiesCard";

const HomePage = () => {
    return (
        <AppFrame>
            <Grid item style={{marginTop: "5em"}}>
                <Grid container item direction={"column"} style={{marginBottom: "2em", padding: "10px"}}>
                    <Typography variant={"h3"} align={"center"}>Welcome to XXXXX</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>


            <Grid container
                  direction={"column"}
                  justify="center">
                <Grid item>
                    <Form/>
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


            <Grid container xs={12} spacing={1} >
                    <StudiesCard/>
                    <StudiesCard/>

            </Grid>

        </AppFrame>
    )
}

export default HomePage