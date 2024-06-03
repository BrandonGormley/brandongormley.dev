import type { Metadata } from 'next';
import ProjectCard from '@/app/components/ui/ProjectCard';

export const metadata: Metadata = {
    title: 'Brandon Gormley | Projects',
    description:
        'Expore my digital playground where creativity meets functionality. From web wonders to mobile marvels, each project in my personal development portfolio reflects my unique blend of passion and proficiency in coding. Join me on this journey of innovation and exploration as I transform ideas into user-friendly realities, one line of code at a time.',
};

export default function page() {
    return (
        <section className='w-full mx-auto max-w-[1280px]'>
            <div className='flex flex-col my-12 p-4 py-8'>
                <div className='flex flex-col md:flex-row w-full'>
                    <ProjectCard
                        imageUrl='/nova-logo.png'
                        description='Nova - A blog site to create or share interesting ideas, fostering
                creativity and collaboration.'
                        repoUrl='https://github.com/BrandonGormley/nova'
                        prodUrl='https://nova-bg.vercel.app/'
                    />
                    <ProjectCard
                        imageUrl='/parkpassport.png'
                        description=' Park Passport is a web application that allows users
                        to retrieve helpful information about national parks
                        before traveling there.'
                        repoUrl='https://github.com/BrandonGormley/park-passport'
                        prodUrl='https://park-passport.vercel.app/'
                    />
                    <ProjectCard
                        imageUrl='/dreamdisneyai.png'
                        description='Dream Disney AI is a web application that will use ai to create a vacation plan for any disney vacation you plan on taking.'
                        repoUrl='https://github.com/BrandonGormley/dreamdisneyai'
                        prodUrl='https://dreamdisneyai.vercel.app/'
                    />
                </div>
            </div>
        </section>
    );
}
