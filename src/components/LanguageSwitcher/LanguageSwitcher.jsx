import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher">
            <button onClick={() => changeLanguage('en')} className={i18n.language.startsWith('en') ? 'active' : ''}>EN</button>
            <button onClick={() => changeLanguage('ru')} className={i18n.language.startsWith('ru') ? 'active' : ''}>RU</button>
            <button onClick={() => changeLanguage('de')} className={i18n.language.startsWith('de') ? 'active' : ''}>DE</button>
        </div>
    );
};

export default LanguageSwitcher;
