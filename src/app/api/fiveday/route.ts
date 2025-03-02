import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;
        if (!apiKey) {
            console.error('API key not found');
            return NextResponse.json({ error: 'API key not found' }, { status: 500 });
        }
        // const { searchParams } = new URL(req.url);
        // const lat = searchParams.get('lat');
        // const lon = searchParams.get('lon');
        // if (!lat || !lon) {
        //     console.error('Latitude or longitude not found');
        //     return NextResponse.json({ error: 'Latitude or longitude not found' }, { status: 400 });
        // }
        const lat = 40.4165;
        const lon = -3.7026;
        const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const dailyRes = await fetch(url, {
            next: {
                revalidate: 3600,
            },
        });
        const dailyData = await dailyRes.json();
        return NextResponse.json(dailyData, { status: 200 });
    } catch (error) {
        console.error('Error when fetching weather data -->', error);
        return NextResponse.json({ error: 'Error fetching weather data' }, { status: 500 });
    }
}
