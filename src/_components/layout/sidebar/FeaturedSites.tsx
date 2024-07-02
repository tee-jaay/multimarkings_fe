import React from 'react';
import Table from 'react-bootstrap/Table';
import WidgetHeading from './WidgetHeading';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedSites: React.FC = () => {
    return (
        <div>
            <WidgetHeading title='Top Article Sites' />
            <div className='mt-3'>
                <SitesTable />
            </div>
        </div>
    );
}

export default FeaturedSites;


const SitesTable: React.FC = () => {
    return (
        <Table bordered size="sm" className='' style={{ fontSize: '12px' }}>
            <thead>
                <tr>
                    <th style={{ paddingLeft: 8 }}>Site</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                <SiteRow />
                <SiteRow />
                <SiteRow />
                <SiteRow />
                <SiteRow />
                <SiteRow />
                <SiteRow />
                <SiteRow />
            </tbody>
        </Table>
    );
}

const SiteRow: React.FC = () => <tr>
    <td style={{ paddingLeft: 8 }}>
        <Link href={"/"} title='site name' target='_blank'>
            <Image src="/logo.svg" alt="" width={36} height={18} />
        </Link>
    </td>
    <td>
        <Link href={"/"} title='example.com' className='text-decoration-none' target='_blank'>
            example.com
        </Link>
    </td>
</tr> 