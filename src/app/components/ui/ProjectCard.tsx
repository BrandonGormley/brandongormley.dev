import Image from 'next/image';

interface ProjectCardProps {
    imageUrl: string;
    description: string;
    repoUrl: string;
    prodUrl: string;
}

export default function ProjectCard({
    imageUrl,
    description,
    repoUrl,
    prodUrl,
}: ProjectCardProps) {
    return (
        <div className='flex flex-col p-6 rounded-lg w-full md:max-w-[50%] lg:max-w-[33%] hover:shadow-md transition-all my-4 md:mx-4'>
            <div className='bg-gray-300 h-10 w-10 rounded-full'></div>
            <p className='text-sm text-gray-500 my-4 leading-relaxed '>
                {description}
            </p>
            <div className='flex flex-row '>
                <a
                    target='_blank'
                    href={repoUrl}
                    className='text-gray-400 text-xs hover:text-gray-900 mr-4 transition-all'
                >
                    Github Repo
                </a>
                <a
                    target='_blank'
                    href={prodUrl}
                    className='text-gray-400 mr-2 text-xs hover:text-gray-900 transition-all'
                >
                    Production
                </a>
            </div>
        </div>
    );
}
