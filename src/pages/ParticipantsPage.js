import React, {useEffect, useState} from 'react'
import {Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import DataTable from "../components/DataTable";
import {useLocation} from "react-router-dom";

import {headTable} from "../data/participants";
import axios from "axios";
import {accesToken} from "../constants/token";

const ParticipantsPage = () => {

    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${accesToken}`;
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )

    const [data, setData] = useState([])


    const apiUrl = '/api'
    const [participantsData, setParticipantsData] = useState(null);
    const [studyData, setStudyData] = useState([]);

    const location = useLocation();
    let path_array = location.pathname.split("/");
    let locationState = location.state
    let studyId = path_array[path_array.length - 2]
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


    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Authorization: `Bearer ${accesToken}`
        }
    })

    const getParticipants = async () => {
        try {
            authAxios.get(`studies/${studyId}/participants`).then(result => {
                setParticipantsData(result.data)
            });
        } catch (err) {
            setParticipantsData(err.message)
        }
    }

    const getStudy = async () => {
        try {
            await authAxios.get(`studies/${studyId}`).then(result => {
                setStudyData(result.data)
            });
        } catch (err) {
            setStudyData(err.message)
        }
    }


    const createTable = () => {
        var dict = []; // create an empty array
        participantsData.map((item) => {
            dict.push({
                id: item["id"],
                col1: item["id"],
                col2: item["email"],
                col3: item["associatedForms"],
                col4: item["formsCompleted"],
                col5: item["languaje"],
                col6: item["invitationStatus"],
                col7: item["actions"]
            });
        })
        setData(dict);

    }


    useEffect(() => {
        getStudy();
        getParticipants();


    }, []);

    useEffect(() => {
        if (participantsData != null) {
            createTable()
        }
    }, [participantsData])

    return (

        <AppFrame tabs={tabs}>

            <Grid item style={{marginTop: "5em"}}>

                <Grid container item direction={"column"} style={{marginBottom: "2em", padding: "10px"}}>
                    <Typography variant={"h3"} align={"center"}>Participants
                        de {studyData.title}</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>
            <Grid container
                  direction={"column"}
                  justify="center"
                  style={{margin: "2em", padding: "10px"}}>

                <Grid item>
                    <DataTable rows={data} columns={headTable}/>

                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default ParticipantsPage