import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'react-bootstrap';

const Locations: React.FC = () => {
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
                    Location
                </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className='mt-1'>                <Dropdown.Item href="#/categories-1" className="text-capitalize" style={{ fontSize: '12px' }}>
                <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                <span>
                    location 1
                </span>
            </Dropdown.Item>
                <Dropdown.Item href="#/categories-2" className="text-capitalize" style={{ fontSize: '12px' }}>
                    <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                    <span>
                        location 2
                    </span>
                </Dropdown.Item>
                <Dropdown.Item href="#/categories-3" className="text-capitalize" style={{ fontSize: '12px' }}>
                    <span className='mx-1'><FontAwesomeIcon icon={faHome} height={12} width={12} /></span>
                    <span>
                        location 3
                    </span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Locations