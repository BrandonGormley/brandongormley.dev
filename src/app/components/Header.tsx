import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className='flex flex-row p-4 py-8 lg:p-6 w-full justify-between items-center max-w-[1280px] mx-auto'>
            <Link
                className='mr-auto ml-1 self-end text-sm font-medium hover:text-emerald-500 transition-all duration-200'
                href='/'
            >
                B<span className='font-light'>randon</span>G
                <span className='font-light'>ormley</span>
            </Link>

            <nav className='flex flex-row justify-center items-center text-sm '>
                <ul className='flex flex-row justify-center items-center shadow hover:shadow-md transition-all duration-200 rounded-lg p-2'>
                    <li className='mx-2'>
                        <Link
                            className='hover:text-emerald-500 font-medium transition-all duration-100'
                            href={'/projects'}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className='mx-2'>
                        <Link
                            className='hover:text-emerald-500 font-medium transition-all duration-100'
                            href={'/skills'}
                        >
                            Skills
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
