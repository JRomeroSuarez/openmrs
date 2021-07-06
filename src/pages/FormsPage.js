import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import FormsCard from "../components/FormsCard";

import {useLocation} from 'react-router-dom'
import {listForms} from "../data/forms";

const FormsPage = () => {

    const location = useLocation();
    let path_array = location.pathname.split("/");

    const tabs = [
        {
            labelTab: path_array.length - 2,
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
                    <Typography variant={"h3"} align={"center"}>Forms
                        del {path_array[path_array.length - 2]}</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} spacing={1}>
                <FormsCard path={`forms/Form1`}
                           name={"Form 1"}
                           responses={1}/>
                <FormsCard path={`forms/Form2`}
                           name={"Form 2"}
                           responses={2}
                />

                {listForms.map(item => (
                    <FormsCard name={item.name}
                               path={`study/${path_array[path_array.length - 2]}/forms/${item.name}`}
                               description={item.description}
                               responses={item.responses}
                    />
                ))}
            </Grid>
        </AppFrame>
    )
}

export default FormsPage