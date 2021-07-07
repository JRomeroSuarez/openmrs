import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, Grid} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import {COLOR_SECONDARY} from "../../constants/colors";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';

import Modal from '@material-ui/core/Modal';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: COLOR_SECONDARY,
        borderRadius: 8,
        margin: '10%'

    },
    paper: {
        position: 'relative',
        margin: '20%',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));



const AddForm = () => {
    const [open, setOpen] = React.useState(false);
    const [data,setData] = React.useState(null)

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    function getData(val,event){
        event.preventDefault()
        setData(val.target.value)
        alert(val.target.value)

    }

    const prevent = (event) => {
        event.preventDefault();
        setOpen(false);

    };


    const classes = useStyles();

    const body = (
        <div className={classes.paper}>

            <Typography component="h1" variant="h5">
                Añade un nuevo form
            </Typography>
            <form className={classes.form} noValidate onSubmit={getData}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    name="description"
                    label="Description"
                    id="description"

                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="responses"
                    label="Responses"
                    id="responses"
                    type="number"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Crear
                </Button>
            </form>
        </div>
    );


    return (
        <Grid item xs={4}
        >
            <Card className={classes.root}>
                <CardContent onClick={handleOpen}>
                    <AddCircleIcon style={{fontSize: 100, color: "white", alignItems: "center"}}/>
                    <Typography align={'center'} variant="h3" gutterBottom>
                        New Form
                    </Typography>

                </CardContent>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>

            </Card>
        </Grid>
    );
}
export default AddForm;