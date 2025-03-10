import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IWeather } from '../interfaces/interface';
import { IWeatherData } from '../interfaces/weather.interface';
import { IAirPollutionData } from '../interfaces/air-pollution.interface';
import { IFiveDayForecast } from '../interfaces/five-day-forecast.interface';

const initialState: IWeather = {
    weather: null,
    airPollution: null,
    fiveDayForecast: null,
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeather: (state, action: PayloadAction<IWeatherData>) => {
            state.weather = action.payload;
        },

        setAirPollution: (state, action: PayloadAction<IAirPollutionData>) => {
            state.airPollution = action.payload;
        },

        setFiveDayForecast: (state, action: PayloadAction<IFiveDayForecast>) => {
            state.fiveDayForecast = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setWeather, setAirPollution, setFiveDayForecast } = weatherSlice.actions;

export default weatherSlice.reducer;
