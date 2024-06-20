import React from 'react'
import Image from 'next/image';

import appVariables from '@/_lib/constants';
import Link from 'next/link';


const Logo: React.FC = () => {
    return (
        <div>
            <Link href="/">
                <Image
                    src={'/logo.svg'}
                    alt={appVariables.next_public_app_title!}
                    width={270}
                    height={90}
                />
            </Link>
        </div>
    )
}

export default Logo;