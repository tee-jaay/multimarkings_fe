import React from 'react'
import { Container, Row, Stack } from 'react-bootstrap';
import Logo from './Logo';
import appVariables from '@/_lib/constants';
import AdsBanner from './AdsBanner';

const MainHeader: React.FC<{}> = () => {
    return (
        <Container fluid className="" style={{ backgroundColor: appVariables.color_header }}>
            <Container>
                <Row>
                    <Stack direction="horizontal" id="header" className="px-0 py-2">
                        <div id="logo">
                            <Logo />
                        </div>
                        <div id="banner_wide" className="ms-auto" style={{ width: '671', height: '90' }}>
                            <AdsBanner />
                        </div>
                    </Stack>
                </Row>
            </Container>
        </Container>
    );
}

export default MainHeader;