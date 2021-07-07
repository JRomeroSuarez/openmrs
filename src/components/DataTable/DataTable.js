import React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {makeStyles} from '@material-ui/core/styles';
import AppIconButton from "../AppIconButton";
import {nameIcons} from "../../constants/icons";
import {useLocation} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    table: {
        margin: theme.spacing(2),
        height: 500, width: '80%',

    },

}));




const DataTable = ({rows, columns}) => {

    const downloadFile =() =>{
        const name = path_array[path_array.length - 1]
        const link = document.createElement('a');
        const nameCleaned = name.replace(/\s/g, '_')
        link.download = `${nameCleaned}.csv`;
        link.href = "./dataset.csv";
        link.click();
    }

    const location = useLocation();
    let path_array = location.pathname.split("/");

    const classes = useStyles();

    const [pageSize, setPageSize] = React.useState(10);
    const handlePageSizeChange = (params) => {
        setPageSize(params.pageSize);
    };

    return (
        <div className={classes.table}>
            <DataGrid pageSize={pageSize}
                      onPageSizeChange={handlePageSizeChange}
                      rowsPerPageOptions={[10, 20, 30]} pagination rows={rows} columns={columns}/>
            <AppIconButton name={nameIcons.DOWNLOAD} text={"Download Data"} onClick={() => downloadFile()}/>
        </div>
    )
}
export default DataTable