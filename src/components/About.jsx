import React from 'react';
import { Typography } from '@material-ui/core';

class About extends React.Component{
    render(){
        return(
            <div style={{margin: '24px', textAlign:'center'}}>
                <Typography variant="h5">
                    Task App v0.0.1
                </Typography>
                <p>...It sucks haha</p>
            </div>
        );
    }
}

export default About;