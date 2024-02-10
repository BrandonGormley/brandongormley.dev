import Image from 'next/image';

export default function page() {
    return (
        <section className='w-full mx-auto max-w-[1280px]'>
            <div className='flex flex-col my-12 p-4 py-8'>
                <div className='flex flex-col md:flex-row w-full'>
                    <div className='flex flex-col p-6 rounded-lg w-full md:max-w-[50%] lg:max-w-[33%] hover:shadow-md transition-all my-4 md:mx-4'>
                        <Image
                            src='/nova-logo.png'
                            alt='Nova Logo'
                            width={100}
                            height={50}
                        />
                        <p className='text-sm text-gray-500 my-4 leading-relaxed'>
                            A blog site to create or share interesting ideas,
                            fostering creativity and collaboration.
                        </p>
                        <div className='flex flex-row '>
                            <a
                                target='_blank'
                                href='https://github.com/BrandonGormley/nova'
                                className='text-gray-400 text-xs hover:text-gray-900 mr-4 transition-all'
                            >
                                Github Repo
                            </a>
                            <a
                                target='_blank'
                                href='https://nova-bg.vercel.app/'
                                className='text-gray-400 mr-2 text-xs hover:text-gray-900 transition-all'
                            >
                                Production
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col p-6 rounded-lg w-full md:max-w-[50%] lg:max-w-[33%] hover:shadow-md transition-all my-4 md:mx-4'>
                        <Image
                            src='/parkpassport.png'
                            alt='Nova Logo'
                            width={25}
                            height={30}
                        />
                        <p className='text-sm text-gray-500 my-4 leading-relaxed'>
                            Park Passport is a web application that allows users
                            to retrieve helpful information about national parks
                            before traveling there.
                        </p>
                        <div className='flex flex-row '>
                            <a
                                target='_blank'
                                href='https://github.com/BrandonGormley/park-passport'
                                className='text-gray-400 text-xs hover:text-gray-900 mr-4 transition-all'
                            >
                                Github Repo
                            </a>
                            <a
                                target='_blank'
                                href='https://park-passport.vercel.app/'
                                className='text-gray-400 mr-2 text-xs hover:text-gray-900 transition-all'
                            >
                                Production
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
