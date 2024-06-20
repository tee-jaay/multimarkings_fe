import React from 'react'
import { Container, Row, Stack } from 'react-bootstrap';

const MainHeader: React.FC<{}> = () => {
    return (
        <Container fluid className="bg-dark text-light">
            <Container>
                <Row>
                    <Stack direction="horizontal" id="header" className="bg-danger p-0">
                        <div id="logo">logo</div>
                        <div id="banner_wide" className="ms-auto">banner wide</div>
                    </Stack>
                </Row>
            </Container>
        </Container>
    );
}

export default MainHeader;