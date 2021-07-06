import React from 'react'
import {Grid, Typography} from "@material-ui/core";
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

    const columns = [
        {field: 'col1', headerName: 'Question', width: 200},
        {field: 'col2', headerName: 'Subtitle', width: 150},
        {field: 'col3', headerName: 'Info', width: 150},
        {field: 'col4', headerName: 'Field type', width: 150},
        {field: 'col5', headerName: 'Mandatory', width: 150},
        {field: 'col6', headerName: 'Variable name', width: 150},
        {field: 'col7', headerName: 'Conditional', width: 150},
        {field: 'col8', headerName: 'Creation date', width: 150},
        {field: 'col9', headerName: 'Edit date', width: 150},
        {field: 'col10', headerName: 'Actions', width: 150},
    ];

    const rows = [
        {
            id: 1,
            col1: 'Lorem ',
            col2: '0',
            col3: '',
            col4: 'Range',
            col5: 'Y',
            col6: 'POS',
            col7: 'Y',
            col8: '1-1-1111',
            col9: '1-1-1111',
            col10: 'Y'
        },
        {
            id: 2,
            col1: 'Lorem',
            col2: '1',
            col3: '',
            col4: 'Info',
            col5: 'N',
            col6: 'POS',
            col7: 'N',
            col8: '1-1-1111',
            col9: '1-1-1111',
            col10: 'Y'
        },
        {
            id: 3,
            col1: 'Lorem',
            col2: '2',
            col3: '',
            col4: 'Text',
            col5: 'N',
            col6: 'POS',
            col7: 'N',
            col8: '1-1-1111',
            col9: '1-1-1111',
            col10: 'Y'
        },
        {
            id: 4,
            col1: 'Lorem',
            col2: '3',
            col3: '',
            col4: 'Single',
            col5: 'Y',
            col6: 'POS',
            col7: 'N',
            col8: '1-1-1111',
            col9: '1-1-1111',
            col10: 'Y'
        },
        {
            id: 5,
            col1: 'Lorem',
            col2: '4',
            col3: '',
            col4: 'Info',
            col5: 'Y',
            col6: 'POS',
            col7: 'Y',
            col8: '1-1-1111',
            col9: '1-1-1111',
            col10: 'Y'
        },
        {
            id: 6,
            col1: 'Lorem',
            col2: '5',
            col3: '',
            col4: 'Text',
            col5: 'Y',
            col6: 'POS',
            col7: 'N',
            col8: '1-1-1111',
            col9: '1-1-1111',
            col10: 'Y'
        },
        {
            id: 7,
            col1: 'Lorem',
            col2: '6',
            col3: '',
            col4: 'Range',
            col5: 'Y',
            col6: 'POS',
            col7: 'N',
            col8: '1-1-1111',
            col9: '1-1-1111',
            col10: 'Y'
        },
        {
            id: 8,
            col1: 'Lorem',
            col2: '7',
            col3: '',
            col4: 'Single',
            col5: 'N',
            col6: 'POS',
            col7: 'Y',
            col8: '1-1-1111',
            col9: '1-1-1111',
            col10: 'Y'
        },
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
                    <DataTable rows={rows} columns={columns}/>
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default DataPage