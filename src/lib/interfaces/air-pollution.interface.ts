interface Coord {
    lon: number;
    lat: number;
}

interface Components {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
}

interface Main {
    aqi: number;
}

interface AirPollutionData {
    components: Components;
    main: Main;
}

export interface IAirPollutionData {
    coord: Coord;
    list: AirPollutionData[];
}
