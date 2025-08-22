import "./globals.css";
export const metadata = {
    title: 'Proofolio',
    description: 'A portfolio app built with Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body className="overflow-x-hidden " 
            >{children}</body>
        </html>
    );
}