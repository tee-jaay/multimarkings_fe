'use client';
import Dropdown from 'react-bootstrap/Dropdown';

const UserMenu = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                size='sm'
                style={{ fontSize: '12px' }}
            >
                User
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" className="text-capitalize" style={{ fontSize: '12px' }}>new item</Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="text-capitalize" style={{ fontSize: '12px' }}>my items</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="text-capitalize" style={{ fontSize: '12px' }}>settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4" className='text-capitalize' style={{ fontSize: '12px' }}>logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default UserMenu;