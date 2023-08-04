import React from 'react';
import LinkedIn from '../assets/LinkedinLogo.svg';
import Instagram from '../assets/InstagramLogo.svg';
import './Footer.css';

function Footer() {
  return (
    <div class="footer">
        <ul class="left-list">
            <li>Prompt Generator</li>
            <li>Dweep Daily</li>
            <li>All Contributors</li>
            <li>Your data on Dweep.io</li>
            <li>Contribute to Dweep</li>
        </ul>
        <ul class="right-list">
            <li>Dweep.io</li>
            <li>Made with love in India</li>
            <img src={Instagram} alt='Instagram'/>
            <img src={LinkedIn} alt='Linkein'/>
            <li><br/></li>
            <li>hello@dweep.io</li>
        </ul>
    </div>
  )
}

export default Footer;