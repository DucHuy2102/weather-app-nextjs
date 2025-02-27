'use client';

import { RootState } from '@/lib/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from './ui/skeleton';
import moment from 'moment';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { get_Icon_Weather, kelvin_To_Celsius, kelvin_To_Fahrenheit } from '@/utils/misc';

export default function Temperature() {
    const weather_Data_Redux = useSelector((state: RootState) => state.weather);
    const [isCelsius, setIsCelsius] = useState<boolean>(true);
    console.log(weather_Data_Redux);

    const today = moment().format('dddd');
    const currentDate = moment().format('Do, YYYY');

    if (!weather_Data_Redux) {
        return (
            <div className='flex items-center gap-2'>
                <Skeleton className='h-12 w-12 rounded-full' />
                <span className='text-xl text-zinc-400 tracking-wide'>Loading data ...</span>
            </div>
        );
    }

    return (
        <div
            className='pt-6 pb-5 px-4 border border-zinc-100 dark:border-zinc-800 rounded-lg flex flex-col 
            justify-between dark:bg-dark-grey shadow-sm dark:shadow-none'
        >
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <span>City: {weather_Data_Redux.name}</span>
                    <span>Weather: {weather_Data_Redux.weather[0]?.main}</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='font-medium'>{today}</span>
                    <span className='font-medium'>{currentDate}</span>
                </div>
            </div>

            <div className='flex justify-center mt-5'>
                <div className='flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full'>
                    <Label
                        htmlFor='temp-unit'
                        className={
                            isCelsius ? 'font-bold text-blue-500' : 'font-medium text-zinc-500'
                        }
                    >
                        °C
                    </Label>
                    <Switch
                        id='temp-unit'
                        checked={!isCelsius}
                        onCheckedChange={() => setIsCelsius(!isCelsius)}
                        className='data-[state=checked]:bg-blue-500'
                    />
                    <Label
                        htmlFor='temp-unit'
                        className={
                            !isCelsius ? 'font-bold text-blue-500' : 'font-medium text-zinc-500'
                        }
                    >
                        °F
                    </Label>
                </div>
            </div>

            <p className='py-8 text-8xl text-zinc-700 dark:text-white font-bold self-center'>
                {isCelsius
                    ? `${kelvin_To_Celsius(weather_Data_Redux.main?.temp)}°C`
                    : `${kelvin_To_Fahrenheit(weather_Data_Redux.main?.temp)}°F`}
            </p>

            <div className='flex flex-col items-center gap-2'>
                <div className='flex items-center gap-2'>
                    <span>{get_Icon_Weather(weather_Data_Redux.weather[0]?.icon)}</span>
                    <p className='capitalize text-xl font-medium'>
                        {weather_Data_Redux.weather[0]?.description}
                    </p>
                </div>
                <p className='flex items-center gap-2'>
                    <span>
                        High:{' '}
                        {isCelsius
                            ? `${kelvin_To_Celsius(weather_Data_Redux.main?.temp_max)}°C`
                            : `${kelvin_To_Fahrenheit(weather_Data_Redux.main?.temp_max)}°F`}
                    </span>
                    <span>
                        Low:{' '}
                        {isCelsius
                            ? `${kelvin_To_Celsius(weather_Data_Redux.main?.temp_min)}°C`
                            : `${kelvin_To_Fahrenheit(weather_Data_Redux.main?.temp_min)}°F`}
                    </span>
                </p>
            </div>
        </div>
    );
}
