import Image from 'next/image';
import SocialBar from '@/app/components/ui/SocialBar';

export default function About() {
    return (
        <section className='w-full mx-auto max-w-[1280px]'>
            <div className='flex flex-col my-12 justify-center mx-auto md:mx-0 md:flex-row md:justify-between max-w-[1280px] px-4 transition-all'>
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
                    <SocialBar />
                </div>
            </div>
        </section>
    );
}
