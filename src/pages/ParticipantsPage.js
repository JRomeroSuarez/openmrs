import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import DataTable from "../components/DataTable";


const ParticipantsPage = () => {
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

    const columns = [
        {field: 'col1', headerName: 'Mail', width: 200},
        {field: 'col2', headerName: 'ID', width: 150},
        {field: 'col3', headerName: 'Associated forms', width: 150},
        {field: 'col4', headerName: 'Forms completed', width: 150},
        {field: 'col5', headerName: 'Languaje', width: 150},
        {field: 'col6', headerName: 'Invitation status', width: 150},
        {field: 'col7', headerName: 'Actions', width: 150},
    ];

    const rows= [
        {id: 1, col1: 'Example@iGive2.com', col2: 'St11111', col3: '', col4: '', col5: '', col6: 'Accepted', col7: ''},
        {id: 2, col1: 'Example2@iGive2.com', col2: 'St22222', col3: '', col4: '', col5: '', col6: 'Accepted', col7: ''},
        {id: 3, col1: 'Example3@iGive2.com', col2: 'St33333', col3: '', col4: '', col5: '', col6: 'Accepted', col7: ''},
        {id: 4, col1: 'Example4@iGive2.com', col2: 'St44444', col3: '', col4: '', col5: '', col6: 'Accepted', col7: ''},
        {id: 5, col1: 'Example5@iGive2.com', col2: 'St55555', col3: '', col4: '', col5: '', col6: 'Accepted', col7: ''},
        {id: 6, col1: 'Example6@iGive2.com', col2: 'St66666', col3: '', col4: '', col5: '', col6: 'Accepted', col7: ''},
        {id: 7, col1: 'Example7@iGive2.com', col2: 'St77777', col3: '', col4: '', col5: '', col6: 'Pending', col7: ''},
        {id: 8, col1: 'Example8@iGive2.com', col2: 'St88888', col3: '', col4: '', col5: '', col6: 'Rejected', col7: ''},
    ];
    return (
        <AppFrame tabs={tabs}>
            <Grid item style={{marginTop: "5em"}}>
                <Grid container item direction={"column"} style={{marginBottom: "2em", padding: "10px"}}>
                    <Typography variant={"h3"} align={"center"}>Participants del Study 1</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>
            <Grid container
                  direction={"column"}
                  justify="center"
                  style={{margin: "2em", padding: "10px"}}>
                <Grid item>
                    <DataTable rows={rows} columns={columns}/>
                </Grid>
            </Grid>


        </AppFrame>
    )
}

export default ParticipantsPage