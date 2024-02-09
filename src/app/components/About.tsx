import Image from 'next/image';
import {
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoInstagram,
    IoLogoYoutube,
    IoLogoTwitter,
} from 'react-icons/io5';

export default function About() {
    return (
        <section className='w-full mx-auto max-w-[1280px]'>
            <div className='flex flex-col my-16 justify-center mx-auto md:mx-0 md:flex-row md:justify-between max-w-[1280px] px-4 transition-all'>
                <Image
                    src={'/hero.jpeg'}
                    width={500}
                    height={500}
                    alt='hero image'
                    className='rounded-lg'
                />

                <div className='flex flex-col w-full my-8 md:p-8 lg:p-16 md:justify-center'>
                    <p className='text-2xl font-light tracking-wide lg:my-2 lg:text-4xl leading-loose'>
                        Hello World! I&apos;m Brandon ☕️
                    </p>
                    <p className='text-gray-800 text-3xl font-bold lg:my-2 lg:text-5xl xl:text-6xl leading-loose'>
                        Front End Developer
                    </p>
                    <p className='text-gray-800 text-lg font-light lg:my-4 leading-loose large:text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ea provident accusantium eveniet, blanditiis
                        repudiandae minus quis quia ab consequatur harum.
                    </p>
                    <div className='flex my-6'>
                        <a
                            href='https://www.linkedin.com/in/brandontgormley/'
                            className='mx-2'
                        >
                            <IoLogoLinkedin className='hover:text-[#0077b5] text-gray-400 h-7 w-7 duration-200 transition-all' />
                        </a>
                        <a
                            href='https://www.instagram.com/brandongormley'
                            className='mx-2'
                        >
                            <IoLogoInstagram className='hover:text-[#d62976] text-gray-400 h-7 w-7 duration-200 transition-all' />
                        </a>
                        <a
                            href='https://www.youtube.com/channel/UCOtIOhA9Y0a36ah9UUZ6RCw'
                            className='mx-2'
                        >
                            <IoLogoYoutube className='hover:text-[#FF0000] text-gray-400 h-7 w-7 duration-200 transition-all' />
                        </a>
                        <a
                            href='https://twitter.com/BrandonGormley'
                            className='mx-2'
                        >
                            <IoLogoTwitter className='hover:text-[#1DA1F2] text-gray-400 h-7 w-7 duration-200 transition-all' />
                        </a>
                        <a
                            href='https://github.com/BrandonGormley'
                            className='mx-2'
                        >
                            <IoLogoGithub className='hover:text-gray-900 text-gray-400 h-7 w-7 duration-200 transition-all' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
