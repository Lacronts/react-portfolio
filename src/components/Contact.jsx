import React from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import './Contact.css'

const Contact= (props) => {
  return (
  <div class='container'>
    <img class="passport" src="./img/contactme.jpg" alt="passport" />
      <Jumbotron className='about'>
        <Container>
          <Row>
            <Col sm={12}>
              <h1>CONTACT ME</h1>
              <hr className="star-light"></hr>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <p><i className="fa fa-skype fa-4x"></i></p>
              <h3><strong style={{fontFamily:"Athelas, sans-serif"}}>Skype</strong></h3>
              <p>ikuz58@gmail.com</p>
            </Col>
            <Col sm={3}>
              <p><i className="fa fa-vk fa-4x"></i></p>
              <h3><strong style={{fontFamily:"Athelas, sans-serif"}}>Vkontakte</strong></h3>
              <p>vk.com/vladimir_gevak</p>
            </Col>
            <Col sm={3}>
              <p><i className="fa fa-envelope-square fa-4x"></i></p>
              <h3><strong style={{fontFamily:"Athelas, sans-serif"}}>E-Mail</strong></h3>
              <p>ikuz58@gmail.com</p>
            </Col>
            <Col sm={3}>
              <p><i className="fa fa-phone fa-4x"></i></p>
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
