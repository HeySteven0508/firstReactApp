import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div>

            <h3> Student CRUD App made by <em>REACT JS</em> </h3>
            <h4> Author: Steven Tan</h4>
            <p>A simple app create in React JS.</p>
            <p>Topics apply - React, React-DOM, React-router-DOM, Hooks</p>
            <p> More updates soon..</p>

            <Link to = '/'> Go Back</Link>
            
        </div>
    )
}

export default About
