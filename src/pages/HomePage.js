import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import StudiesCard from "../components/StudiesCard";
import {List} from "@material-ui/icons";
import {listStudies} from "../data/studies";


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

                    {listStudies.map(item => (
                        <StudiesCard name={item.name}
                                     path={`study/${item.name}/forms`}
                                     description={item.description}
                                     participants={item.participants}
                                     forms={item.forms}
                        />
                    ))}

            </Grid>


        </AppFrame>
    )
}

export default HomePage