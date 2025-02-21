import { Button } from '@/components/ui/button';

export default function page() {
    return (
        <div className='p-20'>
            <h1 className='italic font-serif text-2xl'>Hello Duc Huy</h1>
            <Button size={'lg'} variant={'default'}>
                Click me
            </Button>
        </div>
    );
}
