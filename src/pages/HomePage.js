import React, {useEffect, useState} from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import StudiesCard from "../components/StudiesCard";
import axios from "axios";

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


    const accesToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYyODc2MzE2Nn0.8J6T1OE74mOhUcKgRODWJai-vCCsvo08z7tm6LHvwRGQjmgs0Z6P3-TAX-qM0Q3gXEzrqY-A0wVPIlwOOd-vxA'
    const apiUrl = '/api'

    const [studiesData, setStudiesData] = useState([]);
    const [requestError, setRequestError] = useState();
    const studiesUrl = "/api/studies";
    const authUrl = "/api/login";


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
                    <Typography variant={"h3"} align={"center"}>Welcome to OpenMRS</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>


            <Grid container xs={12} spacing={1}>

                {studiesData.map(item => (
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