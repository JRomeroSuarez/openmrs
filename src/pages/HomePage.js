import React, {useEffect, useState} from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import StudiesCard from "../components/StudiesCard";
import axios from "axios";
import {accesToken} from "../constants/token";

const HomePage = () => {

    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${accesToken}`;
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )


    const apiUrl = '/api'

    const [studiesData, setStudiesData] = useState([]);
    const [requestError, setRequestError] = useState();


    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Authorization: `Bearer ${accesToken}`
        }
    })

    const getStudies = async () => {
        try {
            const result = await authAxios.get(`/studies`);
            setStudiesData(result.data)
        } catch (err) {
            setRequestError(err.message)
        }
    }

    useEffect(() => {
        getStudies()
    }, []);

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
                    <Typography variant={"h3"} align={"center"}>Welcome to Studies</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>


            <Grid container xs={12} spacing={1}>

                {studiesData.map(item => (
                    <StudiesCard id={item.id} name={item.title}
                                 path={`study/${item.id}/forms`}
                                 description={item.description}
                                 participants={item.numParticipants}
                                 forms={item.numForms}
                    />
                ))}

            </Grid>


        </AppFrame>
    )
}

export default HomePage