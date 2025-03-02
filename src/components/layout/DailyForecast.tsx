'use client';

import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Skeleton } from '../ui/skeleton';
import moment from 'moment';
import { getIcon, kelvin_To_Celsius } from '@/utils/misc';

export default function DailyForecast() {
    const { weather, fiveDayForecast } = useSelector((state: RootState) => state.weather);

    if (!fiveDayForecast || !weather) {
        return <Skeleton className='h-[12rem] w-full' />;
    }

    const today = new Date();
    const todayString = today.toISOString().split('T')[0];

    const todaysForecast = fiveDayForecast.list.filter(
        (forecast: { dt_txt: string; main: { temp: number } }) => {
            return forecast.dt_txt.startsWith(todayString);
        }
    );

    const { main: weatherMain } = weather.weather[0];

    if (todaysForecast.length < 1) {
        return (
            <Skeleton className='h-[12rem] w-full col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2' />
        );
    }

    return (
        <div
            className='h-[11rem] border rounded-lg flex flex-col gap-8 p-5
           dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2'
        >
            {todaysForecast.length < 1 ? (
                <div className='flex h-full justify-center items-center'>
                    <span className='text-3xl pb-5 pr-2 text-red-500 italic tracking-wider'>
                        Nothing to show
                    </span>
                </div>
            ) : (
                <Carousel className='w-full h-full'>
                    <CarouselContent>
                        {todaysForecast.map(
                            (forecast: { dt_txt: string; main: { temp: number } }) => {
                                return (
                                    <CarouselItem
                                        key={forecast.dt_txt}
                                        className='flex flex-col items-center justify-center gap-4 basis-[8.5rem] cursor-grab'
                                    >
                                        <p className=' text-gray-300'>
                                            {moment(forecast.dt_txt).format('HH:mm')}
                                        </p>
                                        <p>{getIcon(weatherMain)}</p>
                                        <p>{kelvin_To_Celsius(forecast.main.temp)}°C</p>
                                    </CarouselItem>
                                );
                            }
                        )}
                    </CarouselContent>
                </Carousel>
            )}
        </div>
    );
}
