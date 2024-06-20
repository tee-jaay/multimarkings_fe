import React from 'react'
import Image from 'next/image';

const AdsBanner = () => {
    return (
        <div        >
            <Image
                src={'ads-banner.svg'}
                alt='ads banner'
                width={671}
                height={90}
            />
        </div>
    )
}

export default AdsBanner;