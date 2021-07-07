import React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    table: {
        margin: theme.spacing(2),
        height: 500, width: '80%',

    },

}));


const DataTable = ({rows, columns}) => {
    const classes = useStyles();

    const [pageSize, setPageSize] = React.useState(5);
    const handlePageSizeChange = (params) => {
        setPageSize(params.pageSize);
    };

    return (
        <div className={classes.table}>
            <DataGrid pageSize={pageSize}
                      onPageSizeChange={handlePageSizeChange}
                      rowsPerPageOptions={[5, 10, 20]} pagination rows={rows} columns={columns}/>
        </div>
    )
}
export default DataTable