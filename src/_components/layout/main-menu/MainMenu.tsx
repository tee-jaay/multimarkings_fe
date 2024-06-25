import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Menu from './Menu';
import appVariables from '@/_lib/constants';

const MainMenu: React.FC = () => {
    return (
        <Container fluid className="" style={{ backgroundColor: appVariables.color_menu }}>
            <Container>
                <Row>
                    <div id="main_menu" className="bg-info p-0">
                        <Menu />
                    </div>
                </Row>
            </Container>
        </Container>
    )
}

export default MainMenu;