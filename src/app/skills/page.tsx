import type { Metadata } from 'next';
import SkillBar from '../components/ui/SkillBar';

export const metadata: Metadata = {
    title: 'Brandon Gormley | Skills',
    description:
        'Dive into the core of my expertise with a comprehensive list of coding skills meticulously crafted over years of dedicated learning and practice. From front-end languages like HTML, CSS, and JavaScript to back-end frameworks like Node.js and Express, my skillset is finely tuned to tackle any development challenge with precision and creativity. Explore the building blocks of my digital toolkit and discover how each skill contributes to my ability to bring ideas to life in the digital realm.',
};

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
                <SkillBar />
            </div>
        </section>
    );
}
