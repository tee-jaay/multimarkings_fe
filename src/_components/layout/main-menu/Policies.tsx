import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'react-bootstrap';

const Policies: React.FC = () => {
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
                    Policies
                </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/categories-1" className="text-capitalize" style={{ fontSize: '12px' }}>
                    <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                    <span>
                        policy 1
                    </span>
                </Dropdown.Item>
                <Dropdown.Item href="#/categories-2" className="text-capitalize" style={{ fontSize: '12px' }}>
                    <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                    <span>
                        policy 2
                    </span>
                </Dropdown.Item>
                <Dropdown.Item href="#/categories-3" className="text-capitalize" style={{ fontSize: '12px' }}>
                    <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                    <span>
                        policy 3
                    </span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Policies;