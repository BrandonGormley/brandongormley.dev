import type { Metadata } from 'next';
import { rubik } from '@/app/lib/fonts';
import './globals.css';

import Header from '@/app/components/Header';

export const metadata: Metadata = {
    metadataBase: new URL('https://brandongormley.vercel.app/'),
    title: 'Brandon Gormley | Dev',
    description:
        'Welcome to my digital hub—a place where creativity meets innovation. Explore my projects, skills, and insights as I journey through the ever-evolving world of development. Lets embark on this digital adventure together!',

    openGraph: {
        title: 'Brandon Gormley | Dev',
        description:
            'Welcome to my digital hub—a place where creativity meets innovation. Explore my projects, skills, and insights as I journey through the ever-evolving world of development. Lets embark on this digital adventure together!',
        url: 'https://brandongormley.vercel.app/',
        siteName: 'brandongormley.dev',
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={rubik.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
