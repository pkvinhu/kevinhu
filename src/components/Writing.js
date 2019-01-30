import React, { Component } from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardMedia, CardActions, Button, Icon } from '@material-ui/core';

const styles = () => ({
    gridItem: {
      width: "100%",
      height: 350,
    },
    actions: {
        display: 'flex',
        justifyContent: "flex-end"
    }
  });

class Writing extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="section writing" id="writing">
                <div><Card className={classes.gridItem}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="270"
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
                </Card>
                <Card className={classes.gridItem}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="270"
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
                </Card>  </div>             
                <div><Card className={classes.gridItem}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="270"
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
                </Card>               
                <Card className={classes.gridItem}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="270"
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
        )
    }
}

Writing.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Writing);