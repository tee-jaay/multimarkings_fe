'use client';
import appVariables from '@/_lib/constants';
import Dropdown from 'react-bootstrap/Dropdown';

const UserMenu = () => {
    return (
        <Dropdown className='user_menu'>
            <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                size='sm'
                style={{ fontSize: '12px', backgroundColor: appVariables.color_menu, border: 0, borderRadius: 0 }}
                className='text-uppercase'
            >
                login / register
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: appVariables.color_menu, border: 0, borderRadius: 0 }}>
                <Dropdown.Item href="#/action-1" className="text-capitalize text-light" style={{ fontSize: '12px' }}>new item</Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="text-capitalize text-light" style={{ fontSize: '12px' }}>my items</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="text-capitalize text-light" style={{ fontSize: '12px' }}>settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4" className='text-capitalize text-light' style={{ fontSize: '12px' }}>logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default UserMenu;