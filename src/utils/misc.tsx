import { CloudDrizzle, CloudRain, CloudSun, Cloudy, Snowflake } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';

export const kelvin_To_Celsius = (kelvinDegree: number) => {
    return Math.round(kelvinDegree - 273.15);
};

export const kelvin_To_Fahrenheit = (kelvinDegree: number) => {
    return Math.round((kelvinDegree - 273.15) * (9 / 5) + 32);
};

export const get_Icon_Weather = (icon: string) => {
    return (
        <Image
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt='sun'
            width={80}
            height={80}
        />
    );
};

export const unix_To_Time = (unix: number, timezone: number) => {
    return moment
        .unix(unix)
        .utcOffset(timezone / 60)
        .format('HH:mm');
};

export const getIcon = (weather: string) => {
    switch (weather) {
        case 'Drizzle':
            return <CloudDrizzle size={25} />;
        case 'Rain':
            return <CloudRain size={30} />;
        case 'Snow':
            return <Snowflake size={30} />;
        case 'Clear':
            return <CloudSun size={30} />;
        case 'Clouds':
            return <Cloudy size={30} />;
        default:
            return <CloudSun size={30} />;
    }
};
