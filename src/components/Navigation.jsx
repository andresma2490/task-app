import React from 'react';
import { AppBar, Toolbar, IconButton, Icon, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme)=> ({
    toolbar: theme.mixins.toolbar,
});

class Navigation extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
            <AppBar>
                <Toolbar>
                    {/* To Do (Drawer) */}
                    <IconButton color="inherit" aria-label="menu">
                        <Icon>
                            menu
                        </Icon>
                    </IconButton>
                    <Typography variant="h6">
                        Tasks
                    </Typography>
                </Toolbar>
            </AppBar>
        
            <div className={classes.toolbar}/>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Navigation);