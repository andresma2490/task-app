import React from 'react';
import { Card, CardContent, TextField, Button, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import { db } from '../config/firebase'; 

const styles = () => ({
    root:{
        width: 265,
        margin: '5px'
    },
});

class Task extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.task;
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]:value });
    }

    addOrEditTask = async(taskObject) =>{
        try {
            if(this.state.id){
                await db.collection('tasks').doc(this.state.id).set(taskObject);
                toast('Task edited', {
                    type: 'info',
                })
            }
            else{
                await db.collection('tasks').doc().set(taskObject);
                toast('Task added', {
                    type: 'success'
                })
            }
        } 
        catch(error) {
            console.error(error);
        }
    }

    onSubmit = (event) => {
        event.preventDefault(); 
        this.addOrEditTask(this.state);
        if(!this.state.id){
            this.setState({
                title: '',
                description: ''
            });
        }
    }

    deleteTask = async(id) =>{
        if(window.confirm("are you sure?")){
            try {
                await db.collection('tasks').doc(id).delete();
                toast('Task deleted', {
                    type:'error'
                })
            } 
            catch(error) {
                console.error(error);
            }
        }
    }

    render(){
        const { classes } = this.props;
        return(
            <Card className={classes.root}>
                <CardContent>
                    <form onSubmit={this.onSubmit}>
                        <TextField 
                            required 
                            name="title" 
                            label="Title" 
                            value={this.state.title}
                            onChange={this.handleInputChange}
                        />
                        <br/><br/>
                        <TextField
                            required
                            name="description"
                            multiline
                            rows={4}
                            label="Description"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                        />
                        <br/><br/>   
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            startIcon={<Icon> save </Icon>}
                        >
                            { this.state.id ? 'update' : 'save' }
                        </Button>
                        
                        <Button
                            style={{display: this.state.id ? '' : 'none', marginLeft: '8px'}}
                            variant="outlined"
                            color="secondary"
                            startIcon={<Icon> delete </Icon>}
                            onClick={() => this.deleteTask(this.state.id)}
                        >
                            delete
                        </Button>
                    </form>
                </CardContent>
            </Card>    
        );
    }
}

export default withStyles(styles)(Task);