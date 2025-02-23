'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getWeather, IWeather } from '@/lib/features/weather/weatherSlice';

export default function Logo() {
    const router = useRouter();
    const dispatch = useDispatch();

    const getWeatherData = async () => {
        try {
            const res = await axios.get('/api/weather');
            console.log(res.data);
            const weatherData: IWeather = res.data;
            dispatch(getWeather(weatherData));
        } catch (error) {
            console.log('Error when fetching weather data -->', error);
        }
    };

    useEffect(() => {
        getWeatherData();
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
