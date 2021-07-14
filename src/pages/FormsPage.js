import React, {useEffect, useState} from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import FormsCard from "../components/FormsCard";

import {useLocation} from 'react-router-dom'
import AddForm from "../components/AddForm";
import Forms from "../endpointsPostman/forms.json"
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
    let data = location.state

    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Authorization: `Bearer ${accesToken}`
        }
    })

    const getForms = async () => {
        try {
            const result = await authAxios.get(`/studies/${data}/forms`);
            setFormsData(result.data)
        } catch (err) {
            setFormsData(err.message)
        }
    }

    const getStudy = async () => {
        try {
            const result = await authAxios.get(`/studies/${data}`);
            setStudyData(result.data)
        } catch (err) {
            setStudyData(err.message)
        }
    }

    useEffect(() => {
        getForms();
        getStudy();
    }, []);



    const tabs = [
        {
            labelTab: studyData.title,
            linkTab: "/study/" + data + "/forms",
        },
        {
            labelTab: "Home",
            linkTab: "/",
        },
        {
            labelTab: "Forms",
            linkTab: "/study/" + data + "/forms",
        },
        {
            labelTab: "Participants",
            linkTab: "/study/" + data + "/participants",
        }
    ];

    return (
        <AppFrame tabs={tabs}>
            <Grid item style={{marginTop: "5em"}}>
                <Grid container item direction={"column"} style={{marginBottom: "2em", padding: "10px"}}>
                    <Typography variant={"h3"} align={"center"}>Forms
                        de {studyData.title}</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} spacing={1}>
                <AddForm/>

                {formsData.map(item => (
                    <FormsCard name={item.title}
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