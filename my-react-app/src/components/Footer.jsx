import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import SocialIcon from './SocialIcon';


const Footer = () => (
  <div style={{ textAlign: 'center', marginTop: 60, marginBottom: 40 }}>
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
      <SocialIcon icon={<FaFacebookF />} />
      <SocialIcon icon={<FaTwitter />} />
      <SocialIcon icon={<FaLinkedinIn />} />
      <SocialIcon icon={<FaYoutube />} />
    </div>
    <p style={{ margin: 0, fontWeight: 'bold', fontSize: 14 }}>Example@email.com</p>
    <p style={{ fontSize: 12, marginTop: 4 }}>Copyright © 2020 Name. All rights reserved.</p>
  </div>
);

export default Footer;
