import React from "react";

const projectData = require('../../data/projects');

class Projects extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: {
                name: '',
                desc: '',
                gitHubLink: '',
                img: ''
            }
        }
    }

    componentWillMount() {
        this.setState({
            posts: projectData
        });
    }



    render() {
        return (<div>
            <h2 className="major">Projects</h2>
            <div className="project-card-container">
                {Object
                    .keys(this.state.posts)
                    .map(key => <div className="box">
                        <h1>{this.state.posts[key].name}</h1>
                        <img src={this.state.posts[key].img} alt=""/>
                        <p>{this.state.posts[key].desc}</p>
                        <a href={this.state.posts[key].gitHubLink} target="_blank">Git Hub Project</a>
                    </div>)}
            </div>
        </div>);
    }
}


export default Projects;
