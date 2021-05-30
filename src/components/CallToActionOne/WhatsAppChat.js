import React from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
require('dotenv').config();

const WhatsAppChat = () => {
    return (
        <div>
            <a
        href="https://wa.me/8801713066248"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="icon active-icon" icon={faWhatsapp} size='2x' style={{color: 'green'}} />
      </a>
            


        </div>
    );
};

export default WhatsAppChat;