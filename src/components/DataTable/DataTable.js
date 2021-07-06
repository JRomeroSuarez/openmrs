import React from 'react';
import {DataGrid, GridColDef, GridRowsProp} from '@material-ui/data-grid';
import {makeStyles} from '@material-ui/core/styles';

const columns: GridColDef[] = [
    {field: 'col1', headerName: 'Column 1', width: 150},
    {field: 'col2', headerName: 'Column 2', width: 150},
    {field: 'col3', headerName: 'Column 3', width: 150},
    {field: 'col4', headerName: 'Column 4', width: 150},
];

const rows: GridRowsProp = [
    {id: 1, col1: 'a', col2: 'b', col3: 'c', col4: 'd'},
    {id: 2, col1: 'e', col2: 'f', col3: 'g', col4: 'h'},
    {id: 3, col1: 'i', col2: 'World', col3: 'World', col4: 'World'},
    {id: 4, col1: 'Hello', col2: 'World', col3: 'World', col4: 'World'},
    {id: 5, col1: 'Hello', col2: 'World', col3: 'World', col4: 'World'},
    {id: 6, col1: 'Hello', col2: 'World', col3: 'World', col4: 'World'},
];

const useStyles = makeStyles((theme) => ({
    table: {
        margin: theme.spacing(2),
        height: 500, width: '80%'
    },

}));
const DataTable = ({rows, columns}) => {
    const classes = useStyles();
    return (
        <div className={classes.table}>
            <DataGrid rows={rows} columns={columns}/>
        </div>
    )
}
export default DataTable