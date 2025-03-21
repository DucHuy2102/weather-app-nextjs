'use client';

import { RootState } from '@/lib/store';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { Skeleton } from '../ui/skeleton';
import { WindIcon } from 'lucide-react';

export default function Wind() {
    const { weather } = useSelector((state: RootState) => state.weather);

    const windSpeed = weather?.wind?.speed;
    const windDir = weather?.wind?.deg;

    if (!windSpeed || !windDir) {
        return <Skeleton className='h-[12rem] w-full' />;
    }

    return (
        <div
            className='pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex 
        flex-col gap-3 dark:bg-dark-grey shadow-sm dark:shadow-none'
        >
            <h2 className='flex items-center gap-2 font-medium'>
                <WindIcon size={15} className='text-zinc-200 animate-pulse' />
                Wind
            </h2>

            <div className='compass relative flex items-center justify-center'>
                <div className='image relative'>
                    <Image src='/compass_body.svg' alt='compass' width={110} height={110} />
                    <Image
                        src='/compass_arrow.svg'
                        alt='compass'
                        className='absolute top-0 left-[50%] transition-all duration-500 ease-in-out dark:invert'
                        style={{
                            transform: `rotate(${windDir}deg) translateX(-50%)`,
                            height: '100%',
                        }}
                        width={11}
                        height={11}
                    />
                </div>
                <p
                    className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xs
                dark:text-white font-medium'
                >
                    {Math.round(windSpeed)} m/s
                </p>
            </div>
        </div>
    );
}
