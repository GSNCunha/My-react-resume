import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faReddit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {

    var socialnetworks = [
      <FontAwesomeIcon icon={faLinkedin} />,
      <FontAwesomeIcon icon={faInstagram} />,
      <FontAwesomeIcon icon={faGithub} />,
      <FontAwesomeIcon icon={faReddit} />,
    ];

    if(this.props.data){
      var networks = this.props.data.social.map(function (network, i) {
         
        return (
          <li key={network.name}>
            <a href={network.url}>{socialnetworks[i]}</a>
          </li>
        );
      });
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2017 Tim Baker</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
