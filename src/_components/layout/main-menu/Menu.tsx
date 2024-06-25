"use client";
import React from 'react';
import Link from 'next/link';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import appVariables from '@/_lib/constants';
import { faCogs, faEnvelope, faMoneyBill, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import Categories from './Categories';
import Locations from './Locations';
import Items from './Items';
import Policies from './Policies';

const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg py-0" style={{ backgroundColor: appVariables.color_menu }}>
            <div className="container-fluid">
                <Link className="navbar-brand text-uppercase" href="/" style={{ fontSize: 12, color: '#fff' }}>
                    <span><FontAwesomeIcon icon={faHome} height={12} width={12} color='#fff' /></span> <span style={{ fontSize: 12 }}>Home</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbarDropdown" aria-controls="mainNavbarDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainNavbarDropdown">
                    <ul className="navbar-nav">
                        {/* Category */}
                        <li className="mx-1">
                            <Categories />
                        </li>
                        {/* Location */}
                        <li className="mx-1">
                            <Locations />
                        </li>
                        {/* Items */}
                        <li className="mx-1">
                            <Items />
                        </li>
                        {/* Policies */}
                        <li className="mx-1">
                            <Policies />
                        </li>
                        {/* Do follow */}
                        <li className="mx-1">
                            <Link style={{ fontSize: 12, color: '#fff' }} className="nav-link text-uppercase active" aria-current="page" href="/dofollow-sites">
                                <span><FontAwesomeIcon icon={faNetworkWired} height={12} width={12} color='#fff' /></span> <span>dofollow</span>
                            </Link>
                        </li>
                        {/* Pricing */}
                        <li className="mx-1">
                            <Link style={{ fontSize: 12, color: '#fff' }} className="nav-link text-uppercase" href="/pricing">
                                <span><FontAwesomeIcon icon={faMoneyBill} height={12} width={12} color='#fff' /></span> <span>pricing</span>
                            </Link>
                        </li>
                        {/* Contact Us */}
                        <li className="mx-1">
                            <Link style={{ fontSize: 12, color: '#fff' }} className="nav-link text-uppercase" href="/contact-us">
                                <span><FontAwesomeIcon icon={faEnvelope} height={12} width={12} color='#fff' /></span> <span>contact us</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu