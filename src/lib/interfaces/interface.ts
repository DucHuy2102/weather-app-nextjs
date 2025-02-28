import { IAirPollutionData } from './air-pollution.interface';
import { IWeatherData } from './weather.interface';

export interface IWeather {
    weather: IWeatherData | null;
    airPollution: IAirPollutionData | null;
}
