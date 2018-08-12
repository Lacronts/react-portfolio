import React from 'react'
import {Jumbotron} from 'reactstrap'
import './LandingPage.css'



export default class Main extends React.Component{
    render() {
      return(
        <div class="container">
          <img alt="me" className="profile" src='./img/photo.png'/>
          <Jumbotron>
              <h1>JUNIOR WEB DEVELOPER</h1>
              <hr className="star-light"></hr>
              <span className="skills">HTML5 | CSS3 | Bootstrap | JavaScript | React | PHP</span>
              <ul className="icon-main">
                <li><a href="https://developer.mozilla.org/ru/docs/HTML/HTML5" rel="noopener noreferrer" target="_blank"><img className="icons transition" id="html" title="HTML5" alt="HTML5" src='./icons/html5.svg'/></a></li>
                <li><a href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS3" rel="noopener noreferrer" target="_blank"><img className="icons transition" id="css" alt="CSS" src='./icons/css.svg'/></a></li>
                <li><a href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank"><img className="icons transition" alt="Bootstrap" src='./icons/Bootstrap.svg'/></a></li>
                <li><a href="https://learn.javascript.ru/" rel="noopener noreferrer" target="_blank"><img className="icons transition" alt="JS" src='./icons/JS.svg'/></a></li>
                <li><a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank"><img className="icons transition" alt="React" src='./icons/React.svg'/></a></li>
                <li><a href="http://php.net/" rel="noopener noreferrer" target="_blank"><img className="icons transition" alt="PHP" src='./icons/PHP.svg'/></a></li>
              </ul>
          </Jumbotron>
        </div>

      )
    }
}
