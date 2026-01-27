import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const CarDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { list: cars } = useSelector((state) => state.cars);

    const car = cars.find((c) => c.id === parseInt(id));

    if (!car) {
        return (
            <div className="car-details-container">
                <h2>{t('cars.error', { message: 'Car not found' })}</h2>
                <button className="button back-button" onClick={() => navigate('/cars')}>
                    {t('back')}
                </button>
            </div>
        );
    }

    return (
        <div className="car-details-container">
            <div className="car-details-card">
                <div className="car-details-card__image-wrapper">
                    <img src={car.img} alt={car.name} />
                </div>
                <div className="car-details-card__info">
                    <h1 className="car-details-card__title">{car.name}</h1>
                    <div className="car-details-card__price">
                        TBA
                    </div>
                    {/* For price, we can format it nicely if it exists */}
                    {car.price && (
                        <div className="car-details-card__price">
                            ${car.price.toLocaleString()}
                        </div>
                    )}

                    <p className="car-details-card__description">
                        {car.descriptionKey ? t(car.descriptionKey) : car.description}
                    </p>

                    <div className="car-specs">
                        <div className="car-specs__item">
                            <strong>{t('specs.speed')}</strong>
                            <span>{car.speed} {t('specs.units.speed')}</span>
                        </div>
                        <div className="car-specs__item">
                            <strong>{t('specs.acceleration')}</strong>
                            <span>{car.acceleration} {t('specs.units.acceleration')}</span>
                        </div>
                        <div className="car-specs__item">
                            <strong>{t('specs.engine')}</strong>
                            <span>{car.engine}</span>
                        </div>
                        <div className="car-specs__item">
                            <strong>{t('specs.power')}</strong>
                            <span>{car.power} {t('specs.units.power')}</span>
                        </div>
                    </div>

                    <button className="button back-button" onClick={() => navigate('/cars')}>
                        {t('back')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
