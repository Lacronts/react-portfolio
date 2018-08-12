import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col, CardBody, CardHeader } from 'reactstrap';
import classnames from 'classnames';
import './Project.css'

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div class="container">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              REACT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              Sundries
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="4">
                <Card>
                  <CardHeader>
                    <CardTitle>My react-portfolio</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <img width="200px" src="./img/portfolio.jpg" alt="React project" />
                    <CardText>For more details click on the link</CardText>
                    <a href="https://github.com" rel="noopener noreferrer" target="_blank"><img className="icons transition" id="html" title="HTML5" alt="HTML5" src='./icons/github.svg'/></a>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardHeader>
                    <CardTitle>React Translate Train</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <img width="202px" src="./img/translate.jpg" alt="React project" />
                    <CardText>For more details click on the link</CardText>
                    <a href="https://github.com" rel="noopener noreferrer" target="_blank"><img className="icons transition" id="html" title="HTML5" alt="HTML5" src='./icons/github.svg'/></a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="4">
                <Card>
                  <CardHeader>
                    <CardTitle>Translate Train</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <img width="202px" src="./img/translate_old.jpg" alt="Sundries" />
                    <CardText>For more details click on the link</CardText>
                    <a href="https://github.com" rel="noopener noreferrer" target="_blank"><img className="icons transition" title="GitHub" alt="Sundries" src='./icons/github.svg'/></a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
