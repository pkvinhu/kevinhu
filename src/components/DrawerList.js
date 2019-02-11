import React, { Component } from 'react';
import { Drawer, Button, Icon } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 400
const styles = theme => ({
  button: {
    color: 'black',
    
  },
  buttonBase: {
    color: 'white'
  },
  drawer: {
    width: drawerWidth,
    
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '35px',
    backgroundColor: 'black',
    height: '100%',
  },
  listItem: {
    font: '1.3em solid "Quattrocento Sans"',
    color: 'white',
    padding: '10px 40px 10px 40px',
    '&:hover': {
      color: 'yellow',
      borderBottom: '3px solid white'
    }
  }
})

class DrawerList extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render(){
  	const { handleDrawerToggle } = this;
    const { mobileOpen } = this.state;
    const { classes, className } = this.props;
  	return (
  	  <div>
  	    <div>
  	    <div>
  	      <Button onClick={this.handleDrawerToggle} className={classes.buttonBase}><Icon className={classNames(classes.button, className)}>menu</Icon></Button>
  	    </div>
  	    <Drawer variant="temporary"
                anchor='left'
                className={classes.drawer}
                open={mobileOpen}
                onClose={handleDrawerToggle}>
                <ul className={classes.list}>
                    <a className={`scroll-link navbar-brand item ${classes.listItem}`} href='#home'>HOME</a>
                    <a className={`scroll-link navbar-brand item ${classes.listItem}`} href='#about'>ABOUT ME</a>
                    <a className={`scroll-link navbar-brand item ${classes.listItem}`} href='#tech'>TECHNOLOGIES</a>
                    <a className={`scroll-link navbar-brand item ${classes.listItem}`} href='#projects'>PROJECTS</a>
                    <a className={`scroll-link navbar-brand item ${classes.listItem}`} href='#writing'>WRITING</a>
                    <a className={`scroll-link navbar-brand item ${classes.listItem}`} href='#education'>EDUCATION</a>
                    <a className={`scroll-link navbar-brand item ${classes.listItem}`} target="_blank" href="Software_Engineer_CV_v3.pdf">RESUME</a>
                </ul>
  	    </Drawer>
  	    </div>
  	  </div>
  	)
  }
}

DrawerList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(DrawerList);