import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Stack } from 'react-bootstrap';
import WidgetHeading from './WidgetHeading';

const PopularPosts: React.FC = () => {
    return (
        <div className='my-4'>
            <WidgetHeading title='Popular Articles' />
            <div>
                <PopularItem />
                <PopularItem />
                <PopularItem />
                <PopularItem />
                <PopularItem />
                <PopularItem />
                <PopularItem />
            </div>
        </div>
    );
}

const PopularItem: React.FC = () => <div className='border-bottom py-2'>
    <Link href="/" title="post-slug" className='text-decoration-none' style={{ fontSize: '12px' }}>
        <Stack direction='horizontal'>
            <Image src={"/64.jpg"} width={32} height={32} alt='' className='' />
            <span className='' style={{ marginLeft: '8px' }}>Blockchain development – Panoramic Infotech</span>
        </Stack>
    </Link>
</div>

export default PopularPosts;