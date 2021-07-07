import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import FormsCard from "../components/FormsCard";

import {useLocation} from 'react-router-dom'
import {listForms} from "../data/forms";
import AddForm from "../components/AddForm";

const FormsPage = () => {

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
                    <Typography variant={"h3"} align={"center"}>Forms
                        de {path_array[path_array.length - 2]}</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} spacing={1}>
                <AddForm/>

                {listForms.map(item => (
                    <FormsCard name={item.name}
                               path={`forms/${item.name}`}
                               description={item.description}
                               responses={item.responses}
                    />
                ))}
            </Grid>
        </AppFrame>
    )
}

export default FormsPage