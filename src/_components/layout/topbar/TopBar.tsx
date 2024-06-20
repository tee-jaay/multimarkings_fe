import React from 'react';

import { Container, Row, Stack } from 'react-bootstrap';

import appVariables from '@/_lib/constants';
import UserMenu from './UserMenu';
import Socials from './Socials';

const TopBar: React.FC<{}> = () => {

    return (
        <Container className="" fluid style={{ backgroundColor: appVariables.color_top_bar }}>
            <Container>
                <Row id="topbar" className='py-2'>
                    <Stack direction="horizontal" className="p-0">
                        <div id="socials">
                            <Socials />
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