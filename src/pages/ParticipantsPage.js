import React, {useEffect, useState} from 'react'
import {CircularProgress, Grid, Typography} from "@material-ui/core";
import AppFrame from "../components/AppFrame";
import DataTable from "../components/DataTable";
import {useLocation} from "react-router-dom";

import {headTable} from "../data/participants";
import Participants from "../endpointsPostman/participantsByStudy.json"
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
    const [participantsData, setParticipantsData] = useState([]);
    const [studyData, setStudyData] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const getParticipants = () => {
        try {
            authAxios.get(`studies/${studyId}/participants`).then(result => {
                setParticipantsData(result.data)
                setLoading(false)
                console.log("GetParticipants", participantsData)
            });
        } catch (err) {
            setParticipantsData(err.message)
        }
    }

    const getStudy = async () => {
        try {
            authAxios.get(`studies/${studyId}`).then(result => {
                setStudyData(result.data)
                setLoading(false)
            });
        } catch (err) {
            setStudyData(err.message)
        }
    }


    const createTable = (participantsData) => {
        console.log("Create Table", participantsData)
        var dict = []; // create an empty array
        var i = 1;
        participantsData.map((item) => {
            dict.push({
                id: i,
                col1: item["id"],
                col2: item["email"],
                col3: item["associatedForms"],
                col4: item["formsCompleted"],
                col5: item["languaje"],
                col6: item["invitationStatus"],
                col7: item["actions"]
            });
            i++;
        })
        setData(dict);

    }


    useEffect(() => {
        getStudy();
        getParticipants();
        while (!loading) {
            createTable(participantsData)
            break
        }


    }, []);

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
                    {loading ? <CircularProgress/> : <DataTable rows={data} columns={headTable}/>}

                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default ParticipantsPage