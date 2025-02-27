import { Facebook, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className='py-4 flex justify-center pb-8'>
            <p className='footer-text text-lg flex items-center gap-1'>
                Made by
                <a
                    href='https://www.linkedin.com/in/duchuy2102/'
                    target='_blank'
                    className=' text-green-300 font-bold italic'
                >
                    Duc Huy Nguyen
                </a>
                - Follwing my
                <a
                    href='https://github.com/DucHuy2102'
                    target='_blank'
                    className=' text-green-300 font-bold italic'
                >
                    <Github size={20} />
                </a>
                and
                <a
                    href='https://www.facebook.com/Duc.Huy2102'
                    target='_blank'
                    className=' text-green-300 font-bold italic'
                >
                    <Facebook size={20} />
                </a>
            </p>
        </footer>
    );
}
