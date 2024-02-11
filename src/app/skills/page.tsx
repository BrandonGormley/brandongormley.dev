import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoSass,
    IoLogoReact,
    IoLogoNodejs,
    IoGitMerge,
} from 'react-icons/io5';
import {
    SiExpress,
    SiGithub,
    SiMongodb,
    SiNextdotjs,
    SiPostcss,
    SiRedux,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiWebpack,
} from 'react-icons/si';

export default function page() {
    return (
        <section className='w-full mx-auto max-w-[1280px]'>
            <div className='flex flex-col my-12 justify-center mx-auto md:mx-0 max-w-[1280px] px-4 transition-all w-full'>
                <div className='flex flex-col w-full mt-8 md:p-8 md:justify-center lg:max-w-[65%]'>
                    <p className='text-2xl font-light tracking-wide lg:my-2 lg:text-4xl leading-loose'>
                        Skills
                    </p>
                    <p className='text-gray-800 text-md font-light lg:my-4 leading-loose large:text-xl'>
                        As a passionate Next.js developer deeply immersed in the
                        React ecosystem, I prioritize crafting seamless user
                        experiences. With a keen understanding of UI/UX
                        fundamentals, I continuously strive to enhance website
                        and application usability, ensuring every interaction is
                        intuitive and engaging.
                        <br />
                        Additionally, I actively pursue new emerging
                        technologies in web development to continuously enhance
                        my skill set and stay at the forefront of industry
                        trends.
                    </p>
                </div>
                <div className='flex my-4 md:p-8'>
                    <IoLogoHtml5 className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <IoLogoCss3 className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <IoLogoJavascript className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <IoLogoSass className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <SiTailwindcss className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <SiTypescript className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <IoLogoReact className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <SiRedux className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />{' '}
                    <IoLogoNodejs className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <SiExpress className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <SiNextdotjs className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <SiMongodb className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <SiSupabase className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <SiWebpack className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <SiPostcss className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <SiGithub className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                    <IoGitMerge className=' text-gray-400 h-7 w-7 duration-200 transition-all mx-1' />
                </div>
            </div>
        </section>
    );
}
