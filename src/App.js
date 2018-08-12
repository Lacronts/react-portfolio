import React from 'react';
import Main from './components/Main'
import Footer from './components/Footer'
import {
Navbar,
NavbarBrand,
Nav,
NavItem
} from 'reactstrap'
import { Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {

 render() {
   return (
     <div>
       <Navbar color="dark" expand="md">
         <NavbarBrand><Link to='/'><code>{'<Vladimir Gevak/>'}</code></Link></NavbarBrand>
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
       </Navbar>
    <Main/>
    <Footer/>
  </div>
   );
 }
}
export default App;
