import React from 'react';
import {Jumbotron} from 'reactstrap';
import './AboutMe.css'

const AboutMe= (props) => {
  return (
  <div className='container'>
    <img className="passport" src="./img/passport.jpg" alt="it's me guys" />
      <Jumbotron className='about'>
        <h1>ABOUT ME</h1>
        <hr className="star-light"></hr>
        <p>Junior Web Developer using MySQL, Express, React, PHP, JSP, DB2 with an emphasis on Frontend web development. Common libraries of use: Redux, Express, react-router, redux-thunk. Common use of UI libraries: Bootstrap 4, React-Bootstrap, MaterializeCSS, Material-UI.</p>
      </Jumbotron>
  </div>
   );
};

export default AboutMe;
