import React from 'react';
import Main from './components/Main'
import {
Navbar,
Nav,
NavItem,
NavbarToggler,
Collapse
} from 'reactstrap'
import { Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    isOpen: false
  };
}

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

 render() {
   return (
     <div>
       <Navbar color="dark" expand="md">
         <Link to='/'><code>{'<Vladimir Gevak/>'}</code></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="ml-auto" navbar>
             <NavItem>
               <Link to='/aboutme'>About Me</Link>
             </NavItem>
             <NavItem>
               <Link to="/project">Project</Link>
             </NavItem>
             <NavItem>
               <Link to="/contacts">Contact</Link>
             </NavItem>
           </Nav>
          </Collapse>
       </Navbar>
    <Main/>
  </div>
   );
 }
}
export default App;
