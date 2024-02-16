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

export default function SkillBar() {
    return (
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
    );
}
