import React, {useEffect, useState} from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import FormsCard from "../components/FormsCard";

import {useLocation} from 'react-router-dom'
import AddForm from "../components/AddForm";
import axios from "axios";
import {accesToken} from "../constants/token";

const FormsPage = () => {

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
    const [formsData, setFormsData] = useState([]);
    const [studyData, setStudyData] = useState([]);

    const location = useLocation();
    let path_array = location.pathname.split("/");

    let studyId = path_array[path_array.length - 2]

    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Authorization: `Bearer ${accesToken}`
        }
    })

    const getForms = async () => {
        try {
            const result = await authAxios.get(`/studies/${studyId}/forms`);
            setFormsData(result.data)
        } catch (err) {
            setFormsData(err.message)
        }
    }

    const getStudy = async () => {
        try {
            const result = await authAxios.get(`/studies/${studyId}`);
            setStudyData(result.data)
        } catch (err) {
            setStudyData(err.message)
        }
    }

    useEffect(() => {
        getStudy();
        getForms()


    }, []);


    const tabs = [
        {
            labelTab: studyData.title,
            linkTab: "/study/" + studyId + "/forms",
        },
        {
            labelTab: "Home",
            linkTab: "/",
        },
        {
            labelTab: "Forms",
            linkTab: "/study/" + studyId + "/forms",
        },
        {
            labelTab: "Participants",
            linkTab: "/study/" + studyId + "/participants",
        }
    ];

    return (
        <AppFrame tabs={tabs}>
            <Grid item style={{marginTop: "5em"}}>
                <Grid container item direction={"column"} style={{marginBottom: "2em", padding: "10px"}}>
                    <Typography variant={"h3"} align={"center"}>Forms
                        de {studyData.title}</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>{studyData.description}</Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} spacing={1}>
                <AddForm/>

                {formsData.map(item => (
                    <FormsCard id={item.id} name={item.title}
                               path={`forms/${item.id}`}
                               description={item.description}
                               responses={item.numResponses}
                    />
                ))}
            </Grid>
        </AppFrame>
    )
}

export default FormsPage