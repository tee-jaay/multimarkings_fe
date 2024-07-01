import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import appVariables from '@/_lib/constants';

const Sidebar: React.FC<{}> = () => {
    return (
        <aside className='my-2'>
            <div>
                <Link href={"/"} className='btn text-light' style={{ backgroundColor: appVariables.color_menu, width: '100%', borderRadius: 0 }}>
                    <span><FontAwesomeIcon icon={faPlusSquare} /></span>
                    <span className='text-uppercase mx-2'>Submit Article</span>
                </Link>
            </div>
            <div className='my-4'>
                <h6 className='bg-secondary p-2'>Popular Articles</h6>
            </div>
            <div>
                <h6>Top Article Sites</h6>
            </div>

        </aside>
    );
}

export default Sidebar;