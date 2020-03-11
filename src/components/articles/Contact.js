import React from "react";
import {validate} from "../services/InputVal";

const axios = require('axios').default;

class Contact extends React.Component {
    static initState = {
        formControls: {
            name: {
                value: '',
                placeholder: 'Name',
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 3,
                    isRequired: true
                }
            },
            email: {
                value: '',
                placeholder: 'Email',
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 3,
                    isEmail: true,
                    isRequired: true
                }
            },
            message: {
                value: '',
                placeholder: 'Write a message to us'
            }
        }
    };

    constructor() {
        super();
        this.state = Contact.initState;

    }

    changeHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;


        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });

    };

    formSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {};


        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }
        this.sendFormData(formData).then(r => console.log(r));
        this.resetStateValues();
        alert("Form Submitted!");
    };

    async sendFormData(formData) {
        const url = "https://elemental-email-api.herokuapp.com/notification/contactform";

        formData.appName = 'Frankie-Portfolio';
        return await axios.post(
            url,
            formData,
            {headers: {'Content-Type': 'application/json'}}
        );
    }

    resetStateValues() {
        this.setState(Contact.initState);
    }

    render() {
        return (<div>
            <h2 className="major">Contact</h2>
            <form method="post" action="#">
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"
                           value={this.state.formControls.name.value}
                           valid={this.state.formControls.name.valid}
                           onChange={this.changeHandler.bind(this)}
                           maxLength="120"/>
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"
                           value={this.state.formControls.email.value}
                           valid={this.state.formControls.email.valid}
                           onChange={this.changeHandler.bind(this)}
                           maxLength="120"/>
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="4"
                              value={this.state.formControls.message.value}
                              onChange={this.changeHandler.bind(this)}
                              maxLength="3000"/>
                </div>
                <ul className="actions">
                    <li>
                        <input type="submit" value="Send Message" className="special" onClick={this.formSubmitHandler}
                               disabled={!(this.state.formControls.email.valid && this.state.formControls.name.valid)}/>
                    </li>
                    <li>
                        <input type="reset" value="Reset"/>
                    </li>
                </ul>
            </form>
            <ul className="icons">
                <li>
                    <a href="mailto:rfrankie04@gmail.com" className="icon fa-at" target="_blank"
                       rel="noopener noreferrer">
                        <span className="label">Email</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/frankierodriguezjr/" className="icon fa-linkedin"
                       target="_blank" rel="noopener noreferrer">
                        <span className="label">Linkedin</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/ghost1497"
                        className="icon fa-github"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="label">GitHub</span>
                    </a>
                </li>
            </ul>
        </div>);
    }

}

export default Contact;
