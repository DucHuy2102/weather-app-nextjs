import {
    Footer,
    NavBar,
    Temperature,
    FiveDayForecast,
    AirPollution,
    Sunset,
    Wind,
    DailyForecast,
} from '@/components/layout';

export default function page() {
    return (
        <main className='mx-4 lg:mx-8 xl:mx-24 2xl:mx-64 m-auto'>
            <NavBar />

            {/* content */}
            <div className='pb-4 flex flex-col gap-4 md:flex-row'>
                {/* left */}
                <div className='flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]'>
                    <Temperature />
                    <FiveDayForecast />
                </div>

                {/* right */}
                <div className='flex flex-col w-full'>
                    <div className='instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4'>
                        <AirPollution />
                        <Sunset />
                        <Wind />
                        <DailyForecast />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
