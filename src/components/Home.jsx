import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="home-container">
            <h1>{t('home.welcome')} <span className="highlight">{t('home.title')}</span></h1>
            <p>{t('home.description')}</p>
            <Link to="/cars" className="button">{t('home.button')}</Link>
        </div>
    );
};

export default Home;
