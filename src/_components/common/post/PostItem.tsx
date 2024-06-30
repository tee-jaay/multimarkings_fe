import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

const PostItem: React.FC = () => {
    return (
        <Card style={{ borderRadius: '0' }} className='mb-2 pt-2'>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <Container>
                        <Row className="no-gutters">
                            <Col xs="1" className=''>
                                <Image className='' alt="" src={"/64.jpg"} width={48} height={48} />
                            </Col>
                            <Col xs="11" className=''>
                                <div className='mx-2'>
                                    <Link href={"/"} className='fw-bold' style={{ fontSize: '15px' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit</Link>
                                    <div style={{ fontSize: '13px' }}>
                                        <span>Submitted by <Link href={"/"}>JhonD</Link></span> <span><Link href={"/"}>about 5 days ago</Link></span> <span><a href="/#">share</a></span> <span><Link href={"/#respond"}>0 Comments</Link></span> <span><Link href={"/"}>Costa Rica</Link></span>
                                    </div>
                                    {/* URL */}
                                    <div style={{ fontSize: '13px' }}>
                                        <span>icon</span> <Link href={"https://devapps.uk"}>https://devapps.uk</Link>
                                    </div>
                                    {/* Phone & Email */}
                                    <div style={{ fontSize: '13px' }}>
                                        <span>icon +1 0123456789</span> <span>icon admin@example.com</span>
                                    </div>
                                    {/* Location */}
                                    <div style={{ fontSize: '13px' }}>
                                        <span>Texas</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <div className='mt-2 mb-1' style={{ fontSize: '13px' }}>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut eum, sequi praesentium assumenda id quod voluptates eos amet! Officiis reprehenderit esse vero accusamus doloribus beatae excepturi, libero a natus!</span>
                            <span className='mx-1'><Link href={"/"}>... Read More</Link></span>
                        </div>
                    </Container>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default PostItem;