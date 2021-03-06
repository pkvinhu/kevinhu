import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
    paper: {
        position: 'fixed',
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        maxWidth: '500px',
        minWidth: '300px',
        top: '55%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '30px 50px 30px 50px',
    },
    formContent: {
        height: '100%',
        paddingLeft: '10px',
    },
    formIcons: {
        color: 'black',
    },
    formSend: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        textAlign: 'center',
    },
    formSendContent: {
        padding: '10px',
        backgroundColor: 'black',
        color: 'white',
        width: '100px',
        borderRadius: '50px',

    }
});

class ContactForm extends Component {
    state = {
        email: '',
        subject: '',
        body: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    resetContent = () => {
        this.props.handleClose();
        setTimeout(() => {
            this.setState({
                email: '',
                subject: '',
                body: ''
            })
        }, 1000)
    }

    render() {
        const { handleClose, modalOpen, classes } = this.props;
        return (
            <Modal
                    aria-labelledby="contact-form"
                    aria-describedby="send-an-email"
                    open={modalOpen}
                    onClose={handleClose}
                    className="contactModal">
                    <div className={classes.paper}>
                    <h3><strong>Contact Form</strong></h3>
                        {/* <div className="input-field contact-child-email">
                            <i className={`material-icons prefix ${classes.formIcons}`}>email</i>
                            <input 
                                id="icon_prefix1" 
                                type="text" 
                                name="email" 
                                value={this.state.email} 
                                onChange={this.handleChange}
                                className={`validate ${classes.formContent}`}/>
                            <label htmlFor="icon_prefix1" className={classes.formContent}>Email From</label>
                        </div> */}
                        <div className="input-field contact-child-subject">
                            <i className={`material-icons prefix ${classes.formIcons}`}>subject</i>
                            <input 
                                id="icon_prefix2" 
                                type="text" 
                                name="subject" 
                                value={this.state.subject} 
                                onChange={this.handleChange}
                                className={`validate ${classes.formContent}`}/>
                            <label htmlFor="icon_prefix2" className={classes.formContent}>Subject</label>
                        </div>
                        <div className="input-field contact-child-message">
                            <textarea 
                                rows="15" 
                                id="textarea" 
                                type="text" 
                                name="body" 
                                value={this.state.body} 
                                onChange={this.handleChange}
                                className={`validate ${classes.formContent}`}/>
                            <label htmlFor="textarea" className={classes.formContent}>Send a Message!</label>
                        </div>
                        <div className={classes.formSend}>
                            <a 
                                href={`mailto:pkvinhu@gmail.com?subject=${this.state.subject}&body=${this.state.body.replace(/\n/g, '%0D%0A')}`}
                                className={classes.formSendContent}
                                onClick={this.resetContent}>
                                SEND
                            </a>
                        </div>
                    </div>  
                </Modal>
        )
    }
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);