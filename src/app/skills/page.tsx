import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoSass,
    IoLogoReact,
    IoLogoNodejs,
    IoGitMerge,
    IoLogoFigma,
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
            <div className='flex flex-col my-12 mx-auto md:mx-0 max-w-[1280px] px-4 transition-all w-full'>
                <div className='flex flex-col w-full mt-8 md:p-8 md:justify-center lg:max-w-[65%]'>
                    <p className='text-3xl font-light tracking-wide lg:my-2 lg:text-4xl leading-loose'>
                        Skills
                    </p>
                    <hr className='mb-4 w-40' />
                    <p className='text-gray-800 text-md font-light leading-loose large:text-xl'>
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
                <div className='flex flex-wrap my-6 md:pl-6'>
                    <IoLogoHtml5 className=' text-gray-400 hover:text-orange-500 h-7 w-7 duration-200 transition-all m-2' />
                    <IoLogoCss3 className=' text-gray-400 h-7 w-7 hover:text-blue-500 duration-200 transition-all m-2' />
                    <IoLogoJavascript className=' text-gray-400 hover:text-yellow-500 h-7 w-7 duration-200 transition-all m-2' />
                    <IoLogoSass className=' text-gray-400 hover:text-pink-500 h-7 w-7 duration-200 transition-all m-2' />
                    <SiTailwindcss className=' text-gray-400 hover:text-teal-500 h-7 w-7 duration-200 transition-all m-2' />
                    <SiTypescript className=' text-gray-400 hover:text-blue-500 h-7 w-7 duration-200 transition-all m-2' />
                    <IoLogoReact className=' text-gray-400 hover:text-cyan-500 h-7 w-7 duration-200 transition-all m-2' />
                    <SiRedux className=' text-gray-400 h-7 w-7 hover:text-purple-500 duration-200 transition-all m-2' />{' '}
                    <IoLogoNodejs className=' text-gray-400 hover:text-green-500 h-7 w-7 duration-200 transition-all m-2' />
                    <SiExpress className=' text-gray-400 hover:text-gray-900 h-7 w-7 duration-200 transition-all m-2' />
                    <SiNextdotjs className=' text-gray-400 hover:text-gray-900 h-7 w-7 duration-200 transition-all m-2' />
                    <SiMongodb className=' text-gray-400 hover:text-green-500 h-7 w-7 duration-200 transition-all m-2' />
                    <SiSupabase className=' text-gray-400 hover:text-green-500 h-7 w-7 duration-200 transition-all m-2' />
                    <SiWebpack className=' text-gray-400 hover:text-cyan-500 h-7 w-7 duration-200 transition-all m-2' />
                    <SiPostcss className=' text-gray-400 hover:text-red-500 h-7 w-7 duration-200 transition-all m-2' />
                    <SiGithub className=' text-gray-400 hover:text-gray-900 h-7 w-7 duration-200 transition-all m-2' />
                    <IoGitMerge className=' text-gray-400  hover:text-orange-500 h-7 w-7 duration-200 transition-all m-2' />
                </div>
            </div>
        </section>
    );
}
