import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="about-container">
            <h1>{t('about.title')}</h1>
            <p>{t('about.mission')}</p>
            <p>{t('about.offer')}</p>
            <h2>{t('about.teamTitle')}</h2>
            <p>{t('about.team')}</p>
            <h2>{t('about.whyUsTitle')}</h2>
            <ul>
                <li>{t('about.whyUs.1')}</li>
                <li>{t('about.whyUs.2')}</li>
                <li>{t('about.whyUs.3')}</li>
                <li>{t('about.whyUs.4')}</li>
            </ul>
            <p>
                {t('about.thanks')} <Link to="/contact">{t('about.contactLink')}</Link>.
            </p>
            <Link to="/contact">
                <button className="button about-button" aria-label={t('contact.title')}>
                    {t('contact.title')}
                </button>
            </Link>
        </div>
    );
};

export default About;
