import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="home-container">
            <h1>{t('home.welcome')}</h1>
            <p>
                {t('home.intro1')}
            </p>
            <p>
                {t('home.intro2')}
            </p>
            <h2>{t('home.whyUs')}</h2>
            <ul>
                <li>{t('home.reason1')}</li>
                <li>{t('home.reason2')}</li>
                <li>{t('home.reason3')}</li>
                <li>{t('home.reason4')}</li>
            </ul>
            <p>
                {t('home.ctaStart')}<Link to="/cars">{t('home.ctaLink')}</Link>{t('home.ctaEnd')}
            </p>
        </div>
    );
};

export default Home;
