'use client';

import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';
import { Skeleton } from '../ui/skeleton';
import { SunsetIcon } from 'lucide-react';
import { unix_To_Time } from '@/utils/misc';

export default function Sunset() {
    const { weather } = useSelector((state: RootState) => state.weather);

    if (!weather) {
        return (
            <div className='flex items-center gap-2'>
                <Skeleton className='h-5 w-52' />
            </div>
        );
    }

    const times = weather?.sys?.sunset;
    const timezone = weather?.timezone;
    const sunsetTime = unix_To_Time(times, timezone);
    const sunrise = unix_To_Time(weather?.sys?.sunrise, timezone);

    return (
        <div className='pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none'>
            <div className='top'>
                <h2 className='flex items-center gap-2 font-medium'>
                    <SunsetIcon size={15} className='text-yellow-500 animate-pulse' />
                    Sunset
                </h2>
                <p className='pt-4 text-2xl'>{sunsetTime}</p>
            </div>

            <p className='text-sm'>
                Sunrise Time: <span className='font-bold italic'>{sunrise}</span>
            </p>
        </div>
    );
}
