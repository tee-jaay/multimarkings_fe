import React from 'react';

import { Container, Row, Stack } from 'react-bootstrap';

import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faMastodon, faPinterestSquare, faTumblrSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons/faSquareXTwitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import appVariables from '@/_lib/constants';
import UserMenu from './UserMenu';

const TopBar: React.FC<{}> = () => {

    return (
        <Container className="" fluid style={{ backgroundColor: appVariables.color_top_bar }}>
            <Container>
                <Row id="topbar" className='py-1'>
                    <Stack direction="horizontal" className="p-0">
                        <div id="socials">
                            <Stack direction='horizontal' gap={2}>
                                <a href="/" title='social'><FontAwesomeIcon icon={faFacebookSquare} color='#4867AA' height={16} width={16} /></a>
                                <a href="/" title='social'><FontAwesomeIcon icon={faSquareXTwitter} color='#000000' height={16} width={16} /></a>
                                <a href="/" title='social'><FontAwesomeIcon icon={faInstagramSquare} color='#B500DF' height={16} width={16} /></a>
                                <a href="/" title='social'><FontAwesomeIcon icon={faPinterestSquare} color='#E70123' height={16} width={16} /></a>
                                <a href="/" title='social'><FontAwesomeIcon icon={faTumblrSquare} color='#393152' height={16} width={16} /></a>
                                <a href="/" title='social'><FontAwesomeIcon icon={faMastodon} color='#573FCE' height={16} width={16} /></a>
                                <a href="/" title='social'><FontAwesomeIcon icon={faLinkedinIn} color='#0077B5' height={16} width={16} /></a>
                            </Stack>
                        </div>
                        <div id="user_menu" className="ms-auto">
                            <UserMenu />
                        </div>
                    </Stack>
                </Row>
            </Container>
        </Container>
    );
}

export default TopBar;