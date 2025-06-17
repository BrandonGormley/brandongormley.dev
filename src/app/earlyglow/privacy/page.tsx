export default function page() {
    return (
        <section className='w-full mx-auto max-w-[1280px]'>
            <div className='flex flex-col my-12 p-4 py-8'>
                <div className='flex flex-col w-full'>
                    <h1 className='font-bold mb-6 text-xl'>
                        Privacy Policy for Early Glow
                    </h1>

                    <p className='text-sm text-gray-500 mb-8'>
                        Effective Date: June 17, 2025
                    </p>

                    <p className='mb-4'>
                        Early Glow does not collect, store, or share any
                        personal information. We do not use cookies, analytics
                        tools, or third-party tracking SDKs. Your experience is
                        completely private and local to your device.
                    </p>

                    <p className='mb-4'>
                        The app functions offline and does not connect to any
                        external servers. No personal data is gathered,
                        transmitted, or stored.
                    </p>

                    <p className='mb-4'>
                        If you have any questions or concerns about this privacy
                        policy or the Early Glow app, feel free to reach out via
                        email at:
                        <a
                            href='mailto:brandontgormley@icloud.com'
                            className='text-blue-600 underline block mt-2'
                        >
                            brandontgormley@icloud.com
                        </a>
                    </p>

                    <p className='mt-8 text-sm text-gray-400'>
                        © 2025 Brandon Gormley. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
