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
