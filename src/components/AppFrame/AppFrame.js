import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import NavBar from "../NavBar";
import 'typeface-roboto'
import {COLOR_BACKGROUND, COLOR_BLUE} from "../../constants/colors";

const AppFrame = ({children, tabs}) => {
    return (
        <Grid container
              style={{backgroundColor: COLOR_BACKGROUND}}
              direction={"column"}
              justify="center">
            <Grid item>
                <NavBar tabs={tabs}/>
            </Grid>
            {children}
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node
}
export default AppFrame
