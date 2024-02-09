import type { Metadata } from 'next';
import { rubik } from '@/app/lib/fonts';
import './globals.css';

import Header from '@/app/components/Header';

export const metadata: Metadata = {
    title: 'Brandon Gormley | Dev',
    description: 'Welcome to my portfolio!',
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
