import React, {useCallback, useEffect, useState} from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import StudiesCard from "../components/StudiesCard";
import {listStudies} from "../data/studies";
import Studies from "../endpointsPostman/studies.json"
import axios from "axios";
import Button from "@material-ui/core/Button";

const HomePage = () => {
/*
    const accesToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYyODY3MTgxM30.rj7dC3pKg5GNsFiZWVLnojZ5l4sf1uIJRZWSfwAa6LP2repL4YqUjXvdtOCswyCo7mFz6qvOZozWCo9-HkTcgA'
    const apiUrl = 'http://localhost:8080/api'

    const [studiesData, setStudiesData] = useState([]);
    const studiesUrl = "http://localhost:8080/api/studies";

    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Authorization: `Bearer ${accesToken}`,
            Acces:``
        }
    })
    const getStudiesWithAxios = useCallback(async () => {
        const response = await authAxios.get(`/studies`);
        setStudiesData(response.data);

    });

    useEffect(() => {
        getStudiesWithAxios();

    }, []);*/

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

                {Studies.map(item => (
                    <StudiesCard name={item.title}
                                 path={`study/${item.title}/forms`}
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