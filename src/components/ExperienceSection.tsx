import Video from "/videodudu2.mp4";

const ExperienceSection = () => {
    return (
        <section id='experience' className="experience mx-auto p-8 relative">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                src={Video}
                onError={() => console.log("Video failed to load")}
            >
                <source src="./../assets/videodudu2.mp4" type="video/mp4" />
                Your browser does not support the video.
            </video>
            <div className="relative z-10">
                <h2 className=" experiencetitle text-3xl font-bold mb-8 text-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105 text-center">EXPERIENCE</h2>
                <div className="experiencetitle text-white rounded-lg shadow-md p-6 mb-8 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105">
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="text-2xl font-semibold">Full-Stack Developer</h3>
                    </div>
                    <p className="text-gray-600">Company Name | 2021 - Present</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Developed and maintained web applications using React and Node.js.</li>
                        <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
                        <li>Implemented RESTful APIs and integrated third-party services.</li>
                    </ul>
                </div>
                <div className="experiencetitle text-white bg-white rounded-lg shadow-md p-6 mb-8 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105">
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="text-2xl font-semibold">Freelance Web Developer</h3>
                    </div>
                    <p className="text-gray-600">Self-Employed | 2019 - 2021</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Designed and developed responsive websites for various clients.</li>
                        <li>Utilized HTML, CSS, and JavaScript to create user-friendly interfaces.</li>
                        <li>Managed project timelines and client communications effectively.</li>
                    </ul>
                </div>
                {/* Add more job experiences as needed */}
            </div>
        </section>
    );
};

export default ExperienceSection;
