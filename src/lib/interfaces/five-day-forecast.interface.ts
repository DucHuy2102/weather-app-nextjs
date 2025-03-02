export interface IFiveDayForecast {
    city: City;
    list: WeatherEntry[];
    cod: string;
    cnt: number;
}

interface City {
    id: number;
    name: string;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
    coord: Coord;
}

interface Coord {
    lat: number;
    lon: number;
}

interface WeatherEntry {
    dt: number;
    dt_txt: string;
    main: MainWeather;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    rain?: Rain;
    sys: Sys;
}

interface MainWeather {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
    sea_level?: number;
    grnd_level?: number;
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Clouds {
    all: number;
}

interface Wind {
    speed: number;
    deg: number;
    gust?: number;
}

interface Rain {
    '3h': number;
}

interface Sys {
    pod: string;
}
