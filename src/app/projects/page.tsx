import ProjectCard from '@/app/components/ui/ProjectCard';

export default function page() {
    return (
        <section className='w-full mx-auto max-w-[1280px]'>
            <div className='flex flex-col my-12 p-4 py-8'>
                <div className='flex flex-col md:flex-row w-full'>
                    <ProjectCard
                        imageUrl='/nova-logo.png'
                        description='A blog site to create or share interesting ideas, fostering
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
                </div>
            </div>
        </section>
    );
}
