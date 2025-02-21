'use client';

import { useRouter } from 'next/navigation';

export default function Logo() {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push('/')}
            className='italic text-3xl font-serif cursor-pointer text-zinc-500 hover:text-zinc-800 group
            transition-colors duration-300 border-b border-zinc-300 hover:border-zinc-800
            dark:border-b dark:border-white dark:text-zinc-400 dark:hover:text-zinc-200'
        >
            d<span className='font-bold text-[#FABC3F] group-hover:text-[#FFB22C]'>H</span>uy
        </div>
    );
}
