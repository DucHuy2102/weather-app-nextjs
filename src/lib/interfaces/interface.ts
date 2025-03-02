import { IAirPollutionData } from './air-pollution.interface';
import { IFiveDayForecast } from './five-day-forecast.interface';
import { IWeatherData } from './weather.interface';

export interface IWeather {
    weather: IWeatherData | null;
    airPollution: IAirPollutionData | null;
    fiveDayForecast: IFiveDayForecast | null;
}
