import React from "react";

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', message: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.name, email: event.target.email, message: event.target.message});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(<div>
            <h2 className="major">Contact</h2>
            <form method="post" action="#">
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"/>
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="4"/>
                </div>
                <ul className="actions">
                    <li>
                        <input type="submit" value="Send Message" className="special"/>
                    </li>
                    <li>
                        <input type="reset" value="Reset"/>
                    </li>
                </ul>
            </form>
            <ul className="icons">
                <li>
                    <a href="mailto:rfrankie04@gmail.com" className="icon fa-at" target="_blank" rel="noopener noreferrer" >
                        <span className="label">Email</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/frankierodriguezjr/" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer" >
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
