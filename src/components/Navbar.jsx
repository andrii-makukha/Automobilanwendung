import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

const Navbar = () => {
    const { t } = useTranslation();
    const navItems = [
        { to: '/', label: t('navbar.home') },
        { to: '/about', label: t('navbar.about') },
        { to: '/cars', label: t('navbar.cars') },
        { to: '/contact', label: t('navbar.contact') },
    ];

    return (
        <nav className="navbar">
            <div style={{ display: 'flex', gap: '20px' }}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
            <LanguageSwitcher />
        </nav>
    );
};

export default Navbar;
