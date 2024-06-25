import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import appVariables from '@/_lib/constants';

const Categories: React.FC = () => {
    return (
        <Dropdown className='mt-1'>
            <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                size='sm'
                style={{
                    fontSize: '12px',
                    color: '#fff',
                    padding: 0,
                    margin: 0,
                }}
            >
                <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                <span className='text-uppercase'>
                    Categories
                </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className='mt-1' style={{ backgroundColor: appVariables.color_menu }}>
                <div className='d-flex'>
                    <div className="">
                        <Dropdown.Item href="/categories-1" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 1
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-2" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 2
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-3" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 3
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-1" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 1
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-2" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 2
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-3" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 3
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-1" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 1
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-2" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 2
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-3" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 3
                            </span>
                        </Dropdown.Item>
                    </div>
                    <div className="">
                        <Dropdown.Item href="/categories-4" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 4
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-5" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 5
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-6" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 6
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-4" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 4
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-5" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 5
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-6" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 6
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-4" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 4
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-5" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 5
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-6" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 6
                            </span>
                        </Dropdown.Item>
                    </div>
                    <div className="">
                        <Dropdown.Item href="/categories-4" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 4
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-5" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 5
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-6" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 6
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-4" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 4
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-5" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 5
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-6" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 6
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-4" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 4
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-5" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 5
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-6" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 6
                            </span>
                        </Dropdown.Item>
                    </div>
                    <div className="">
                        <Dropdown.Item href="/categories-4" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 4
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-5" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 5
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-6" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 6
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-4" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 4
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-5" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 5
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-6" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 6
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-4" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 4
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-5" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 5
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/categories-6" className="text-white text-uppercase my-1" style={{ fontSize: '12px' }}>
                            <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                            <span className='mx-1'>
                                category 6
                            </span>
                        </Dropdown.Item>
                    </div>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Categories;