import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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

export interface IWeather {
    coord: Coord;
    main: Main;
    weather: Weather[];
    wind: Wind;
    sys: Sys;
    name: string;
    visibility: number;
}

const initialState: IWeather = {
    coord: { lon: 0, lat: 0 },
    main: { temp: 0, feels_like: 0, temp_min: 0, temp_max: 0, pressure: 0 },
    weather: [],
    wind: { speed: 0, deg: 0, gust: 0 },
    sys: { country: '', sunrise: 0, sunset: 0 },
    name: '',
    visibility: 0,
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getWeather: (state, action: PayloadAction<IWeather>) => {
            return action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
