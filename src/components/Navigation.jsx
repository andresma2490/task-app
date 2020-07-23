import React from 'react';
import { AppBar, Toolbar, IconButton, Icon, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const styles = (theme)=> ({
    toolbar: theme.mixins.toolbar,
    drawer:{
        width: 240
    }
});

class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    openMenu = ()=> {
        this.setState({ open: !this.state.open});
    }

    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu" onClick={ this.openMenu }>
                        <Icon>
                            menu
                        </Icon>
                    </IconButton>
                    <Typography variant="h6">
                        Tasks
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Drawer
                variant="temporary"
                anchor="left"
                open={ this.state.open }
                onClose={ this.openMenu }
            >
                <List>
                    <ListItem button className={classes.drawer} onClick={ this.openMenu }>
                        <ListItemIcon>{ <Icon> arrow_back </Icon> }</ListItemIcon>
                        <ListItemText>Back</ListItemText>
                    </ListItem>
                    
                    <ListItem button component={Link} to="/" onClick={ this.openMenu }>
                        <ListItemIcon>{ <Icon> home </Icon> }</ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>

                    <ListItem button component={Link} to="about" onClick={ this.openMenu }>
                        <ListItemIcon>{ <Icon> info </Icon> }</ListItemIcon>
                        <ListItemText>About</ListItemText>
                    </ListItem>
                </List>
            </Drawer>

            <div className={classes.toolbar}/>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Navigation);