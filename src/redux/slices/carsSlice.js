import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import teslaImg from "./images/tesla-model-s.jpg";
import bmwImg from "./images/bmw-m3.jpg";
import audiImg from "./images/audi-a8.jpg";
import mercedesImg from "./images/mercedes-benz-s-class.jpg";
import porscheImg from "./images/porsche-911.jpg";
import fordImg from "./images/ford-mustang.jpg";
import lamborghiniImg from "./images/lamborghini-aventador.jpg";
import ferrariImg from "./images/ferrari-488.jpg";
import toyotaImg from "./images/toyota-camry.jpg";
import hondaImg from "./images/honda-accord.jpg";
import chevroletImg from "./images/chevrolet-corvette.jpg";
import nissanImg from "./images/nissan-gtr.jpg";
import vwGolfImg from "./images/volkswagen-golf.jpg";
import hyundaiImg from "./images/hyundai-elantra.jpg";
import kiaImg from "./images/kia-stinger.jpg";
import mazdaImg from "./images/mazda-mx5.jpg";
import subaruImg from "./images/subaru-wrx.jpg";
import volvoImg from "./images/volvo-xc90.jpg";

// Асинхронна дія для завантаження брендів автомобілів з API Dadata
export const fetchCarBrands = createAsyncThunk(
    'cars/fetchCarBrands',
    async (query, { rejectWithValue }) => {
        try {
            const token = process.env.REACT_APP_DADATA_API_KEY;
            if (!token) {
                console.warn('API Key for Dadata is missing! Please set REACT_APP_DADATA_API_KEY in .env');
                return [];
            }
            const response = await axios.post('https://dadata.ru/api/suggest/car_brand/',
                { query },
                {
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data.suggestions;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

// Початковий стан
const initialState = {
    list: [
        { id: 1, name: 'Tesla Model S', descriptionKey: 'carDefaults.tesla', img: teslaImg, price: 89990, speed: 322, acceleration: 2.1, engine: 'Electric', power: 1020 },
        { id: 2, name: 'BMW M3', descriptionKey: 'carDefaults.bmw', img: bmwImg, price: 76000, speed: 290, acceleration: 3.5, engine: '3.0L Twin-Turbo I6', power: 503 },
        { id: 3, name: 'Audi A8', descriptionKey: 'carDefaults.audi', img: audiImg, price: 87500, speed: 250, acceleration: 5.6, engine: '3.0L V6 Turbo', power: 335 },
        { id: 4, name: 'Mercedes-Benz S-Class', descriptionKey: 'carDefaults.mercedes', img: mercedesImg, price: 114500, speed: 250, acceleration: 4.4, engine: '3.0L I6 Turbo', power: 429 },
        { id: 5, name: 'Porsche 911', descriptionKey: 'carDefaults.porsche', img: porscheImg, price: 114400, speed: 304, acceleration: 3.2, engine: '3.0L Twin-Turbo Flat-6', power: 473 },
        { id: 6, name: 'Ford Mustang', descriptionKey: 'carDefaults.ford', img: fordImg, price: 30920, speed: 250, acceleration: 4.5, engine: '5.0L V8', power: 450 },
        { id: 7, name: 'Lamborghini Aventador', descriptionKey: 'carDefaults.lamborghini', img: lamborghiniImg, price: 507353, speed: 350, acceleration: 2.8, engine: '6.5L V12', power: 769 },
        { id: 8, name: 'Ferrari 488', descriptionKey: 'carDefaults.ferrari', img: ferrariImg, price: 284700, speed: 340, acceleration: 3.0, engine: '3.9L Twin-Turbo V8', power: 661 },
        { id: 9, name: 'Toyota Camry', descriptionKey: 'carDefaults.toyota', img: toyotaImg, price: 26420, speed: 210, acceleration: 7.3, engine: '2.5L 4-Cylinder', power: 203 },
        { id: 10, name: 'Honda Accord', descriptionKey: 'carDefaults.honda', img: hondaImg, price: 27295, speed: 200, acceleration: 7.2, engine: '1.5L Turbo 4-Cylinder', power: 192 },
        { id: 11, name: 'Chevrolet Corvette', descriptionKey: 'carDefaults.chevrolet', img: chevroletImg, price: 64500, speed: 312, acceleration: 2.9, engine: '6.2L V8', power: 495 },
        { id: 12, name: 'Nissan GT-R', descriptionKey: 'carDefaults.nissan', img: nissanImg, price: 120990, speed: 315, acceleration: 2.9, engine: '3.8L Twin-Turbo V6', power: 565 },
        { id: 13, name: 'Volkswagen Golf', descriptionKey: 'carDefaults.vw', img: vwGolfImg, price: 23195, speed: 210, acceleration: 8.2, engine: '1.4L Turbo 4-Cylinder', power: 147 },
        { id: 14, name: 'Hyundai Elantra', descriptionKey: 'carDefaults.hyundai', img: hyundaiImg, price: 20500, speed: 200, acceleration: 8.4, engine: '2.0L 4-Cylinder', power: 147 },
        { id: 15, name: 'Kia Stinger', descriptionKey: 'carDefaults.kia', img: kiaImg, price: 36690, speed: 270, acceleration: 4.7, engine: '3.3L Twin-Turbo V6', power: 368 },
        { id: 16, name: 'Mazda MX-5', descriptionKey: 'carDefaults.mazda', img: mazdaImg, price: 28050, speed: 220, acceleration: 5.7, engine: '2.0L 4-Cylinder', power: 181 },
        { id: 17, name: 'Subaru WRX', descriptionKey: 'carDefaults.subaru', img: subaruImg, price: 30605, speed: 240, acceleration: 5.5, engine: '2.4L Turbo Flat-4', power: 271 },
        { id: 18, name: 'Volvo XC90', descriptionKey: 'carDefaults.volvo', img: volvoImg, price: 56000, speed: 230, acceleration: 6.5, engine: '2.0L Turbo/Supercharged', power: 295 },
    ],
    isLoading: false,
    error: null,
    carBrands: []  // Сюди будемо зберігати бренди автомобілів з Dadata
};

// Слайс
const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.list.push({
                ...action.payload,
                id: state.list.length ? state.list[state.list.length - 1].id + 1 : 1,
            });
        },
        removeCar: (state, action) => {
            state.list = state.list.filter(car => car.id !== action.payload);
        },
        updateCar: (state, action) => {
            const index = state.list.findIndex(car => car.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = { ...state.list[index], ...action.payload };
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCarBrands.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCarBrands.fulfilled, (state, action) => {
                state.isLoading = false;
                state.carBrands = action.payload;
            })
            .addCase(fetchCarBrands.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Не вдалося завантажити бренди автомобілів';
            });
    },
});

// Експортуємо дії та редюсер
export const { addCar, removeCar, updateCar } = carsSlice.actions;
export const selectCars = (state) => state.cars.list;
export const selectCarBrands = (state) => state.cars.carBrands;  // Вибірка брендів автомобілів
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export default carsSlice.reducer;
