import { Github } from 'lucide-react';
import { Button } from './ui/button';
import { LogoWeb, SearchBar, ToggleTheme } from '.';

export default function NavBar() {
    return (
        <div className='w-full py-4 flex items-center justify-between'>
            {/* logo */}
            <LogoWeb />

            {/* nav links */}
            <div className='flex items-center gap-x-2'>
                <SearchBar />
                <ToggleTheme />
                <a
                    href='https://github.com/DucHuy2102/weather-app-nextjs'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Button>
                        <Github />
                        Source Code
                    </Button>
                </a>
            </div>
        </div>
    );
}
