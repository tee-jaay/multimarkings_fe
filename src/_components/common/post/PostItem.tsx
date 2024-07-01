import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faComment, faEnvelope, faGlobe, faLocation, faMap, faPhone, faShare } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Container, ListGroup, ListGroupItem, Row, Stack } from 'react-bootstrap';

const PostItem: React.FC = () => {
    return (
        <Card style={{ borderRadius: '0' }} className='mb-2 pt-2'>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <Container>
                        <Row className="no-gutters">
                            <Col xs="1">
                                <Image alt="" src={"/64.jpg"} width={48} height={48} />
                            </Col>
                            <Col xs="11">
                                <div className='mx-2'>
                                    <Link href={"/"} className='fw-bold text-decoration-none' style={{ fontSize: '15px' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit</Link>
                                    <Stack direction='horizontal' gap={2} style={{ fontSize: '12px' }}>
                                        <span>Submitted by <Link href={"/"} className='text-decoration-none'>JhonD</Link></span>
                                        <span><FontAwesomeIcon icon={faClock} height={24} width={24} color='#888888' />  <Link href={"/"} className='text-decoration-none'>about 5 days ago</Link></span>
                                        <span><FontAwesomeIcon icon={faShare} height={24} width={24} color='#888888' />  <a href="/#" className='text-decoration-none'>share</a></span>
                                        <span><FontAwesomeIcon icon={faComment} height={24} width={24} color='#888888' /><Link href={"/#respond"} className='text-decoration-none'>0 Comments</Link></span>
                                        <span><FontAwesomeIcon icon={faMap} height={24} width={24} color='#888888' /><Link href={"/"} className='text-decoration-none'>Costa Rica</Link></span>
                                    </Stack>
                                    {/* URL */}
                                    <div style={{ fontSize: '12px' }} className='mt-2'>
                                        <span><FontAwesomeIcon icon={faGlobe} height={24} width={24} color='#888888' /></span> <Link href={"https://devapps.uk"} className='text-decoration-none'>https://devapps.uk</Link>
                                    </div>
                                    {/* Phone & Email */}
                                    <div style={{ fontSize: '12px' }} className='mt-2'>
                                        <span><FontAwesomeIcon icon={faPhone} height={24} width={24} color='#888888' /> +1 0123456789</span>
                                        <span className='mx-3'><FontAwesomeIcon icon={faEnvelope} height={24} width={24} color='#888888' />admin@example.com</span>
                                    </div>
                                    {/* Location */}
                                    <div style={{ fontSize: '12px' }} className='mt-2'>
                                        <span><FontAwesomeIcon icon={faLocation} height={24} width={24} color='#888888' />Texas</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <div className='mt-2 mb-1' style={{ fontSize: '12px' }}>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut eum, sequi praesentium assumenda id quod voluptates eos amet! Officiis reprehenderit esse vero accusamus doloribus beatae excepturi, libero a natus!</span>
                            <span className='mx-1'>... <Link href={"/"} className='text-decoration-none'>Read More</Link></span>
                        </div>
                    </Container>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default PostItem;