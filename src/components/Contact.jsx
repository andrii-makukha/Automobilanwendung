import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = t('contact.errors.name');
        if (!formData.email) newErrors.email = t('contact.errors.email');
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('contact.errors.emailInvalid');

        if (!formData.message) newErrors.message = t('contact.errors.message');

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            setSuccessMessage(t('contact.form.success'));
            setTimeout(() => setSuccessMessage(''), 3000);
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }
    };

    return (
        <div className="contact-container">
            <h1>{t('contact.title')}</h1>
            <p>{t('contact.description')}</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>{t('contact.form.name')}</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={classNames('input', { 'input--error': errors.name })}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label>{t('contact.form.email')}</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={classNames('input', { 'input--error': errors.email })}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label>{t('contact.form.message')}</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={classNames('textarea', { 'textarea--error': errors.message })}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                <button type="submit" className="button">{t('contact.form.submit')}</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default Contact;
