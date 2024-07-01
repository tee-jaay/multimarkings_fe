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
            <div>
                <h4>Popular Articles</h4>
            </div>
            <div>
                <h4>Top Article Sites</h4>
            </div>

        </aside>
    );
}

export default Sidebar;