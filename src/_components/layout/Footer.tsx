import appVariables from '@/_lib/constants';
import React from 'react'
import { Container, Row } from 'react-bootstrap';

const Footer: React.FC<{}> = () => {
    return (
        <Container fluid className="" style={{ backgroundColor: appVariables.color_footer }}>
            <Container>
                <Row>
                    <section id="footer" className="p-0">
                        <div>
                            <h4>Footer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis sed ex, quasi facere nihil libero optio! Similique reprehenderit veniam nam tempore corrupti eligendi dolores voluptatibus, soluta autem excepturi pariatur.</p>
                        </div>
                    </section>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;