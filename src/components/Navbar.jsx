import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

const Navbar = () => {
    const { t } = useTranslation();
    const navItems = [
        { to: '/', label: t('nav.home') },
        { to: '/about', label: t('nav.about') },
        { to: '/cars', label: t('nav.cars') },
        { to: '/contact', label: t('nav.contact') },
    ];

    return (
        <nav className="navbar">
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                    {item.label}
                </NavLink>
            ))}
            <LanguageSwitcher />
        </nav>
    );
};

export default Navbar;
