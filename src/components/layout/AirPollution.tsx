'use client';

import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';
import { Skeleton } from '../ui/skeleton';
import { Progress } from '../ui/progress';
import { ThermometerSun } from 'lucide-react';
import { Badge } from '../ui/badge';

export default function AirPollution() {
    const { airPollution: airPollution_Data_Redux } = useSelector(
        (state: RootState) => state.weather
    );

    if (!airPollution_Data_Redux) {
        return (
            <div className='flex items-center gap-2'>
                <Skeleton className='h-5 w-52' />
            </div>
        );
    }

    const airQuality_Index = airPollution_Data_Redux.list[0].main.aqi;
    const airQuality_Levels = [
        { rating: 1, label: 'Good', color: 'bg-green-500' },
        { rating: 2, label: 'Fair', color: 'bg-yellow-500' },
        { rating: 3, label: 'Moderate', color: 'bg-orange-500' },
        { rating: 4, label: 'Poor', color: 'bg-red-500' },
        { rating: 5, label: 'Very Poor', color: 'bg-purple-500' },
    ];
    const airQuality = airQuality_Levels.find((level) => level.rating === airQuality_Index);

    return (
        <div
            className='air-pollution pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8
       dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2'
        >
            <div className='flex items-center justify-between'>
                <h2 className='flex items-center gap-2 font-medium'>
                    <ThermometerSun size={15} className='text-red-500 animate-pulse' />
                    Air Pollution
                </h2>
                <Badge className={`${airQuality?.color} text-white px-3 py-1 rounded-full`}>
                    {airQuality?.label}
                </Badge>
            </div>
            <Progress value={(airQuality_Index / 5) * 100} className='progress' />
            <p className='text-sm'>
                {airQuality_Index === 1 &&
                    ' The air is fresh and clean, perfect for outdoor activities! 🌿'}
                {airQuality_Index === 2 &&
                    ' The air is still good, but sensitive individuals should be cautious. 🏃‍♂️'}
                {airQuality_Index === 3 &&
                    ' Moderate air pollution detected. Consider reducing prolonged outdoor activities. 😷'}
                {airQuality_Index === 4 &&
                    " The air quality is poor. It's advisable to stay indoors if possible. 🚪"}
                {airQuality_Index === 5 &&
                    ' Very high pollution levels! Avoid going outside and consider using an air purifier. ⚠️'}
            </p>
        </div>
    );
}
