import React, { Component } from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardMedia, CardActions, Button, Icon } from '@material-ui/core';

const styles = () => ({
    gridItem: {
      width: "370px",
      height: 300,
    },
    actions: {
        display: 'flex',
        justifyContent: "flex-end"
    },
    contain: {
        display: 'flex',
        justifyContent: 'center',
        padding: '25px'
    }
  });

class Writing extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className='writing section' id='writing'>
                <div>
                    <div className={classes.contain}><Card className={classes.gridItem}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image={require("../CultivatingAppetites.png")}
                        />
                    <CardActions className={classes.actions}>
                        <Button size="small"><a 
                        target="_blank" rel="noopener noreferrer"
                        href="https://www.inheritancemag.com/stories/cultivating-appetites" 
                        >
                        Go to InheritanceMag for Full Article <Icon>arrow_forward_ios</Icon></a></Button>
                    </CardActions>
                    </CardActionArea>
                </Card></div>
                <div className={classes.contain}><Card className={classes.gridItem}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image={require("../EngagingPower.png")}
                        />
                    <CardActions className={classes.actions}>
                        <Button size="small"><a 
                        target="_blank" rel="noopener noreferrer"
                        href="https://www.inheritancemag.com/article/engaging-power-and-politics-in-an-immigrant-family" 
                        >
                        Go to InheritanceMag for Full Article <Icon>arrow_forward_ios</Icon></a></Button>
                    </CardActions>
                    </CardActionArea>
                </Card></div>  
                </div>             
                <div >
                <div className={classes.contain}><Card className={classes.gridItem}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image={require("../NamingViolence.png")}
                        />
                    <CardActions className={classes.actions}>
                        <Button size="small"><a 
                        target="_blank" rel="noopener noreferrer"
                        href="https://www.inheritancemag.com/article/naming-the-violence-of-charlottesville" 
                        >
                        Go to InheritanceMag for Full Article <Icon>arrow_forward_ios</Icon></a></Button>
                    </CardActions>
                    </CardActionArea>
                </Card></div>               
                <div className={classes.contain}><Card className={classes.gridItem}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image={require("../ExcavatingMemory.png")}
                        />
                    <CardActions className={classes.actions}>
                        <Button size="small"><a 
                        target="_blank" rel="noopener noreferrer"
                        href="https://www.inheritancemag.com/stories/excavating-the-trenches-of-chinese-memory" 
                        >
                        Go to InheritanceMag for Full Article <Icon>arrow_forward_ios</Icon></a></Button>
                    </CardActions>
                    </CardActionArea>
                </Card></div>
                </div>
            </div>
        )
    }
}

Writing.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Writing);