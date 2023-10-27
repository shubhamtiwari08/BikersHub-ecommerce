import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './footer.css'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Footer() {

    const Navigate = useNavigate()

  return (
    <footer>
      <p>Made with ❤️</p>
      <p>By shubham tiwari</p>
      <ul>
        <li>
          <Link to={'https://www.linkedin.com/in/shubham-tiwari-65bb97210/'}
           target="_blank"
          >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="var(--Neutral-color)"
            size="xl"
          />
          </Link>
        </li>
        <li>
        <Link to={'https://github.com/shubhamtiwari08'}
           target="_blank"
          >
          <FontAwesomeIcon
            icon={faGithub}
            color="var(--Neutral-color)"
            size="xl"
          />
          </Link>
        </li>
        <li>
        <Link to={'https://twitter.com/shubhamtiwu'}
         target="_blank"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            color="var(--Neutral-color)"
            size="xl"
          />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
