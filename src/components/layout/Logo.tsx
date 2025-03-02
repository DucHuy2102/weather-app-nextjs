'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAirPollution, setFiveDayForecast, setWeather } from '@/lib/slices/weatherSlice';
import { IWeatherData } from '@/lib/interfaces/weather.interface';
import { IAirPollutionData } from '@/lib/interfaces/air-pollution.interface';
import { IFiveDayForecast } from '@/lib/interfaces/five-day-forecast.interface';

export default function Logo() {
    const router = useRouter();
    const dispatch = useDispatch();

    const getWeatherData = async () => {
        try {
            const res = await axios.get('/api/weather');
            const weatherData: IWeatherData = res.data;
            dispatch(setWeather(weatherData));
        } catch (error) {
            console.log('Error when fetching weather data -->', error);
        }
    };

    const getAirPollutionData = async () => {
        try {
            const res = await axios.get('/api/pollution');
            const airPollutionData: IAirPollutionData = res.data;
            dispatch(setAirPollution(airPollutionData));
        } catch (error) {
            console.log('Error when fetching air pollution data -->', error);
        }
    };

    const getFiveDayForecast = async () => {
        try {
            const res = await axios.get('/api/fiveday');
            const fiveDayForecast: IFiveDayForecast = res.data;
            dispatch(setFiveDayForecast(fiveDayForecast));
        } catch (error) {
            console.log('Error when fetching five day forecast data -->', error);
        }
    };

    useEffect(() => {
        getWeatherData();
        getAirPollutionData();
        getFiveDayForecast();
    }, []);

    return (
        <div
            onClick={() => router.push('/')}
            className='italic text-3xl font-serif cursor-pointer text-zinc-500 hover:text-zinc-800 group
            transition-colors duration-300 border-b border-zinc-300 hover:border-zinc-800
            dark:border-b dark:border-white dark:text-zinc-400 dark:hover:text-zinc-200'
        >
            d<span className='font-bold text-[#FABC3F] group-hover:text-[#FFB22C]'>H</span>uy
        </div>
    );
}
