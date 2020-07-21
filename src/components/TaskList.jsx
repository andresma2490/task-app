import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { db } from '../config/firebase'; 
import Task from './Task';

class TaskList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newTask: {
                title:'',
                description:''
            },
            tasks: []
        }
    }
    
    componentDidMount(){
        this.getTasks();
    }

    getTasks = () =>{
        try {
            db.collection('tasks').onSnapshot((querySnapshot)=>{
                const docs = [];
                querySnapshot.forEach(doc => {
                    docs.push({...doc.data(), id:doc.id});
                });
                this.setState({tasks: docs});         
            });
        } 
        catch(error) {
            console.error(error);
        }
    }

    render(){
        return(
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Task task={this.state.newTask}/>

                    { this.state.tasks.map(doc =>
                        <Box key={doc.id}>
                            <Task task={doc} />
                        </Box>
                    )}
                </Grid>
            </div>
        );
    }
}

export default TaskList;