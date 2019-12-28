import React from "react";

class Contact extends React.Component{

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
                    <textarea name="message" id="message" rows="4"></textarea>
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
