import Link from 'next/link'
import ButtonMain from './ButtonMain';

export default function NavBar() {
    return (
       <div className="w-screen flex justify-center px-4 py-2">
         <nav className="w-full text-foreground flex items-center justify-between font-geist">
            <Link href="/" className="text-xl font-bold tracking-tight relative">
            <div className='relative border-2 border-foreground px-5 py-2 uppercase font-mono tracking-[4]'>
            Proofolio
            <span className='block absolute bg-background px-4 text-center left-1/2 translate-x-[-50%] text-sm'>AI</span>
            </div>
                <span className="absolute -right-14 top-0 text-xs bg-primary/20 text-foreground/80 px-3 py-0.5 rounded-full font-medium">
                    beta
                </span>
            </Link>
            <Link href={'/trial'}> 
           <ButtonMain text={"try now "}>
            <pre className='font-geist text-background/50'> - for free</pre>
           </ButtonMain>
            </Link>
        </nav>
       </div>
    );
}