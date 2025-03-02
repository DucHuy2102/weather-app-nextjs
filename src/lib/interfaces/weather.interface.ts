interface Coord {
    lon: number;
    lat: number;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

interface Sys {
    country: string;
    sunrise: number;
    sunset: number;
}

export interface IWeatherData {
    coord: Coord;
    main: Main;
    weather: Weather[];
    wind: Wind;
    sys: Sys;
    name: string;
    visibility: number;
    timezone: number;
}
