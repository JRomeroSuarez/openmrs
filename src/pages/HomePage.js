import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import StudiesCard from "../components/StudiesCard";


const HomePage = () => {
    const tabs = [
        {
            labelTab: "Home",
            linkTab: "/",
        }
    ];
    return (
        <AppFrame tabs={tabs}>
            <Grid item style={{marginTop: "5em"}}>
                <Grid container item direction={"column"} style={{marginBottom: "2em", padding: "10px"}}>
                    <Typography variant={"h3"} align={"center"}>Welcome to OpenMRS</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>


            <Grid container xs={12} spacing={1}>
                <StudiesCard path={`study/Study1/forms`}
                             name={"Study 1"}
                             description={"LOREM 1"}/>
                <StudiesCard path={`study/Study2/forms`}
                             name={"Study 2"}
                             description={"LOREM 2"}/>
            </Grid>


        </AppFrame>
    )
}

export default HomePage