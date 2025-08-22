import Link from 'next/link'
import ButtonMain from './ButtonMain';

export default function NavBar() {
    return (
       <div className="w-screen flex justify-center px-4 py-2">
         <nav className="w-full text-foreground flex items-center justify-between font-geist">
            <Link href="/" className="text-2xl font-bold tracking-tight relative">
                Proofolio
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