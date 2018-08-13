import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, Row, Col, CardBody, CardHeader } from 'reactstrap';
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
      <div className="container">
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
              <Col sm="6">
                <Card>
                  <CardHeader>
                    <CardTitle>My react-portfolio</CardTitle>
                  </CardHeader>
                  <CardBody>
                  <a href="https://github.com/Lacronts/react-portfolio" rel="noopener noreferrer" target="_blank">
                     <img width="100%" src="./img/portfolio.jpg" alt="React project" />
                  </a>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card>
                  <CardHeader>
                    <CardTitle>Translate Train</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <a href="https://github.com" rel="noopener noreferrer" target="_blank"><img width="100%" src="./img/translate.jpg" alt="React project" /></a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card>
                  <CardHeader>
                    <CardTitle>Translate Train</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <a href="https://github.com" rel="noopener noreferrer" target="_blank"><img width="100%" src="./img/translate_old.jpg" alt="Sundries" /></a>
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
