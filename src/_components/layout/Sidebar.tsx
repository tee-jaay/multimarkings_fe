import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Col, Container, Row, Stack } from 'react-bootstrap';
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
                <h6 className='p-2 bg-light border-bottom'>
                    Popular Articles
                </h6>
                <div>
                    <div className='border-bottom py-2'>
                        <Link href="/" title="post-slug" className='text-decoration-none' style={{ fontSize: '12px' }}>
                            <Stack direction='horizontal'>
                                <Image src={"/64.jpg"} width={32} height={32} alt='' className='' />
                                <span className='' style={{ marginLeft: '8px' }}>Blockchain development – Panoramic Infotech</span>
                            </Stack>
                        </Link>
                    </div>
                    <div className='border-bottom py-2'>
                        <Link href="/" title="post-slug" className='text-decoration-none' style={{ fontSize: '12px' }}>
                            <Stack direction='horizontal'>
                                <Image src={"/64.jpg"} width={32} height={32} alt='' className='' />
                                <span className='' style={{ marginLeft: '8px' }}>Blockchain development – Panoramic Infotech</span>
                            </Stack>
                        </Link>
                    </div>
                    <div className='border-bottom py-2'>
                        <Link href="/" title="post-slug" className='text-decoration-none' style={{ fontSize: '12px' }}>
                            <Stack direction='horizontal'>
                                <Image src={"/64.jpg"} width={32} height={32} alt='' className='' />
                                <span className='' style={{ marginLeft: '8px' }}>Blockchain development – Panoramic Infotech</span>
                            </Stack>
                        </Link>
                    </div>
                    <div className='border-bottom py-2'>
                        <Link href="/" title="post-slug" className='text-decoration-none' style={{ fontSize: '12px' }}>
                            <Stack direction='horizontal'>
                                <Image src={"/64.jpg"} width={32} height={32} alt='' className='' />
                                <span className='' style={{ marginLeft: '8px' }}>Blockchain development – Panoramic Infotech</span>
                            </Stack>
                        </Link>
                    </div>
                    <div className='border-bottom py-2'>
                        <Link href="/" title="post-slug" className='text-decoration-none' style={{ fontSize: '12px' }}>
                            <Stack direction='horizontal'>
                                <Image src={"/64.jpg"} width={32} height={32} alt='' className='' />
                                <span className='' style={{ marginLeft: '8px' }}>Blockchain development – Panoramic Infotech</span>
                            </Stack>
                        </Link>
                    </div>
                    <div className='border-bottom py-2'>
                        <Link href="/" title="post-slug" className='text-decoration-none' style={{ fontSize: '12px' }}>
                            <Stack direction='horizontal'>
                                <Image src={"/64.jpg"} width={32} height={32} alt='' className='' />
                                <span className='' style={{ marginLeft: '8px' }}>Blockchain development – Panoramic Infotech</span>
                            </Stack>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <h6>Top Article Sites</h6>
            </div>

        </aside>
    );
}

export default Sidebar;