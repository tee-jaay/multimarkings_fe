import appVariables from '@/_lib/constants';
import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faMastodon, faPinterestSquare, faTumblrSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons/faSquareXTwitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Stack } from 'react-bootstrap';

const TopBar: React.FC<{}> = () => {
    return (
        <Container className="" fluid style={{ backgroundColor: appVariables.color_top_bar }}>
            <Container>
                <Row id="topbar" className='py-1'>
                    <Stack direction="horizontal" className="p-0">
                        <div id="socials">
                            <Stack direction='horizontal' gap={2}>
                                <a><FontAwesomeIcon icon={faFacebookSquare} color='' height={14} width={14} /></a>
                                <a><FontAwesomeIcon icon={faSquareXTwitter} color='' height={14} width={14} /></a>
                                <a><FontAwesomeIcon icon={faInstagramSquare} color='' height={14} width={14} /></a>
                                <a><FontAwesomeIcon icon={faPinterestSquare} color='' height={14} width={14} /></a>
                                <a><FontAwesomeIcon icon={faTumblrSquare} color='' height={14} width={14} /></a>
                                <a><FontAwesomeIcon icon={faMastodon} color='' height={14} width={14} /></a>
                                <a><FontAwesomeIcon icon={faLinkedinIn} color='' height={14} width={14} /></a>
                            </Stack>
                        </div>
                        <div id="user_menu" className="ms-auto">dropdown menu</div>
                    </Stack>
                </Row>
            </Container>
        </Container>
    );
}

export default TopBar;