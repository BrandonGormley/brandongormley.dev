import {
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoInstagram,
    IoLogoYoutube,
    IoLogoTwitter,
} from 'react-icons/io5';

export default function SocialBar() {
    return (
        <div className='flex my-6'>
            <a
                href='https://www.linkedin.com/in/brandontgormley/'
                className='mr-2'
            >
                <IoLogoLinkedin className='hover:text-[#0077b5] text-gray-400 h-7 w-7 duration-200 transition-all' />
            </a>
            <a href='https://www.instagram.com/brandongormley' className='mx-2'>
                <IoLogoInstagram className='hover:text-[#d62976] text-gray-400 h-7 w-7 duration-200 transition-all' />
            </a>
            <a
                href='https://www.youtube.com/channel/UCOtIOhA9Y0a36ah9UUZ6RCw'
                className='mx-2'
            >
                <IoLogoYoutube className='hover:text-[#FF0000] text-gray-400 h-7 w-7 duration-200 transition-all' />
            </a>
            <a href='https://twitter.com/BrandonGormley' className='mx-2'>
                <IoLogoTwitter className='hover:text-[#1DA1F2] text-gray-400 h-7 w-7 duration-200 transition-all' />
            </a>
            <a href='https://github.com/BrandonGormley' className='mx-2'>
                <IoLogoGithub className='hover:text-gray-900 text-gray-400 h-7 w-7 duration-200 transition-all' />
            </a>
        </div>
    );
}
