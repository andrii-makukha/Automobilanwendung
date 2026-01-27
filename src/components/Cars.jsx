import React, { useEffect } from 'react';
import CarCard from './CarCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarBrands } from '../redux/slices/carsSlice';
import { useTranslation } from 'react-i18next';

const Cars = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { list: cars, isLoading, error } = useSelector((state) => state.cars);

    useEffect(() => {
        dispatch(fetchCarBrands());
    }, [dispatch]);

    return (
        <div className="cars">
            <h2>{t('cars.title')}</h2>
            {/* Відображення стану завантаження або помилки */}
            {isLoading && <p>{t('cars.loading')}</p>}
            {error && <p className="error">{t('cars.error', { message: error })}</p>}

            {/* Відображення списку автомобілів */}
            {cars.length === 0 ? (
                <p>{t('cars.noCars')}</p>
            ) : (
                <div className="car-list">
                    {cars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cars;
