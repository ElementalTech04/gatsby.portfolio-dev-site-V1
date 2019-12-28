import React from "react";
import pic01 from "../../images/gradient.jpg";


const Intro = () => {
    return (
        <div>
            <h2 className="major">About</h2>
            <span className="image main">
        <img src={pic01} alt=""/>
        </span>
            <h3>PRESENT EMPLOYMENT</h3>
            <p>
                Frankie Rodriguez is an Associate Software Engineer at Corporation Service Company (CSC). His position is of a full stack nature, working daily on an internal application that is made up a stack that includes an Angular front end, Spring
                API, and an Oracle Database.
            </p>
            <h3>BECOMING A SOFTWARE ENGINEER</h3>
            <p>While attending Lehigh University, Frankie majored in Computer Engineering. This major is an
                interdisciplinary
                between Computer Science and Electrical Engineering with an emphasis on the Electrical Engineering
                side. After doing well in his first programming class in junior year, he wanted to switch majors in
                order
                to focus solely on Computer Science but that was going to be a difficult feat since he was so far into
                his
                college career. </p><p>Fear Not! </p><p>Frankie was fortunate enough to have
            the opportunity to attend <a href="https://www.zipcodewilmington.com" target="_blank" rel="noopener noreferrer" >Zip Code Wilmington</a>, a vigorous 12-week coding boot camp that aims to turn
            students
            into full stack developers by the end of the program. He spent </p>
        </div>
    );
};

export default Intro;
