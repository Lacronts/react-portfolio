import React from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import './Contact.css'

const Contact= (props) => {
  return (
  <div className='container'>
    <img className="passport" src="./img/contactme.jpg" alt="passport" />
      <Jumbotron className='about'>
        <Container>
          <Row>
            <Col sm={12}>
              <h1>CONTACT ME</h1>
              <hr className="star-light"></hr>
            </Col>
          </Row>
          <Row>
            <Col sm={3} className="contacts">
              <p><i className="fa fa-skype fa-3x"></i></p>
              <h3><strong style={{fontFamily:"Athelas, sans-serif"}}>Skype</strong></h3>
              <p>ikuz58@gmail.com</p>
            </Col>
            <Col sm={3} className="contacts">
              <p><i className="fa fa-vk fa-3x"></i></p>
              <h3><strong style={{fontFamily:"Athelas, sans-serif"}}>Vkontakte</strong></h3>
              <p>vk.com/vladimir_gevak</p>
            </Col>
            <Col sm={3} className="contacts">
              <p><i className="fa fa-envelope-square fa-3x"></i></p>
              <h3><strong style={{fontFamily:"Athelas, sans-serif"}}>E-Mail</strong></h3>
              <p>ikuz58@gmail.com</p>
            </Col>
            <Col sm={3} className="contacts">
              <p><i className="fa fa-phone fa-3x"></i></p>
              <h3><strong style={{fontFamily:"Athelas, sans-serif"}}>Phone</strong></h3>
              <p>+7(983)419-67-52</p>
            </Col>
          </Row>
      </Container>
      </Jumbotron>
  </div>
   );
};

export default Contact
