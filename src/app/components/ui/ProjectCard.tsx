import Image from 'next/image';
import { FaGithub, FaLaptop } from 'react-icons/fa';

interface ProjectCardProps {
    imageUrl: string;
    description: string;
    repoUrl?: string;
    prodUrl: string;
}

export default function ProjectCard({
    imageUrl,
    description,
    repoUrl,
    prodUrl,
}: ProjectCardProps) {
    return (
        <div className='flex flex-col align-baseline p-6 rounded-lg w-full md:max-w-[50%] lg:max-w-[33%] hover:shadow-md transition-all my-2 md:mx-4'>
            <Image src={imageUrl} height={40} width={40} alt='Project Logo' />
            <p className='text-sm text-gray-500 my-4 leading-relaxed '>
                {description}
            </p>
            <div className='flex flex-row '>
                {repoUrl && (
                    <a
                        target='_blank'
                        href={repoUrl}
                        className='text-gray-400 text-xl hover:text-gray-900 mr-4 transition-all'
                    >
                        <FaGithub />
                    </a>
                )}
                <a
                    target='_blank'
                    href={prodUrl}
                    className='text-gray-400 mr-2 text-xl hover:text-gray-900 transition-all'
                >
                    <FaLaptop />
                </a>
            </div>
        </div>
    );
}
