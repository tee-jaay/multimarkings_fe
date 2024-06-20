import React from 'react'
import { Stack } from 'react-bootstrap';
import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faMastodon, faPinterestSquare, faTumblrSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons/faSquareXTwitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Socials: React.FC = () => {
    return (
        <Stack direction='horizontal' gap={2}>
            <a href="/" title='social'><FontAwesomeIcon icon={faFacebookSquare} color='#4867AA' height={24} width={24} /></a>
            <a href="/" title='social'><FontAwesomeIcon icon={faSquareXTwitter} color='#000000' height={24} width={24} /></a>
            <a href="/" title='social'><FontAwesomeIcon icon={faInstagramSquare} color='#B500DF' height={24} width={24} /></a>
            <a href="/" title='social'><FontAwesomeIcon icon={faPinterestSquare} color='#E70123' height={24} width={24} /></a>
            <a href="/" title='social'><FontAwesomeIcon icon={faTumblrSquare} color='#393152' height={24} width={24} /></a>
            <a href="/" title='social'><FontAwesomeIcon icon={faMastodon} color='#573FCE' height={24} width={24} /></a>
            <a href="/" title='social'><FontAwesomeIcon icon={faLinkedinIn} color='#0077B5' height={24} width={24} /></a>
        </Stack>
    );
}

export default Socials;