import React from 'react';
import './Footer.css'

const Footer = (props) => {
  return (
      <footer className="footer">
        <div className="custom-footer">
          Copyright © Vladimir Gevak {(new Date().getFullYear())}
        </div>
      </footer>
  );
};

export default Footer;
