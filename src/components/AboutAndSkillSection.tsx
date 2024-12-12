import { useState, useEffect } from 'react';
import ReactS from './../assets/react.svg';
import HTML5 from './../assets/html5.png';
import NodeJS from './../assets/nodejs.png';
import TypeScript from './../assets/typescript.svg';
import CSS3 from './../assets/css3.svg';
import Github from './../assets/GitHubLogo.png'
import Video from "/videodudu2.mp4"

const AboutAndSkillSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const skills = [
        { icon: ReactS, name: 'JavaScript' },
        { icon: HTML5, name: 'HTML' },
        { icon: NodeJS, name: 'Node JS' },
        { icon: TypeScript, name: 'TypeScript' },
        { icon: CSS3, name: 'CSS' },
        { icon: Github, name: 'Github' }
    ];

    const nextSlide = () => {
        setIsExiting(true);
        setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % skills.length);
            setIsExiting(false);
        }, 500);
    };

    // const prevSlide = () => {
    //     setIsExiting(true);
    //     setTimeout(() => {
    //         setCurrentSlide((prevSlide) => (prevSlide - 1 + skills.length) % skills.length);
    //         setIsExiting(false);
    //     }, 500);
    // };

    useEffect(() => {
        if (isExiting) {
            return;
        }
        const slideElement = document.querySelector('.slide');
        if (slideElement) {
            slideElement.classList.add('slide-enter');
            setTimeout(() => {
                slideElement.classList.remove('slide-enter');
            }, 500);
        }
    }, [currentSlide, isExiting]);

    return (
        <section id='about' className="about-me p-8 shadow-md mx-auto w-full relative">
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
            {/* ------------------------------------------------------------------------------------------------------------- */}
            <div className="relative z-10">
                <div className="aboutme-content">
                    <div className="aboutme-card">
                        <h2 className="text-4xl font-bold mb-4 text-gray-200 text-center mt-10">About Me</h2>
                        <p className="text-lg text-gray-200 text-justify mb-10">
                            Passionate about the digital landscape, I have developed a keen interest in web development over the years. My journey began with a fascination for creating interactive and visually appealing websites, which led me to pursue a career in this dynamic field. With several years of hands-on experience, I have worked on various projects ranging from small business websites to complex web applications.
                        </p>
                    </div>
                    <div className="aboutme-card">
                        <p className="text-lg text-gray-200 text-justify mb-10">
                            Over the past few years, I've had the opportunity to immerse myself in the world of web development. My journey began as a front-end developer for a small startup, where I crafted sleek and responsive websites using HTML, CSS, and JavaScript. The thrill of seeing my designs come to life on the screen was unmatched.
                        </p>
                    </div>
                    <div className="aboutme-card">
                        <p className="text-lg text-gray-200 text-justify mb-10">
                            Eager to expand my skills, I transitioned to a full-stack role at a mid-sized tech company. There, I dove into React for dynamic user interfaces and leveraged Node.jsto create robust server-side functionalities. Working on diverse projects, from e-commerce platforms to internal tools, I learned the importance of delivering high-quality code and meeting tight deadlines.
                        </p>
                    </div>
                    <div className="aboutme-card">
                        <p className="text-lg text-gray-200 text-justify mb-10">
                            Throughout my career, I've always prioritized attention to detail and clear communication, ensuring that clients and team members are aligned every step of the way. This blend of technical expertise and strong work principles has enabled me to contribute effectively to every project I undertake.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="aboutme-card-skill">
                        <h3 id='skills' className="text-4xl font-bold mb-8 text-gray-200 text-center mt-20">My Skills</h3>
                    </div>
                    <div className="skillslist container mx-auto flex justify-center items-center text-center h-40 mt-20">
                        <div className={`slide ${isExiting ? 'slide-exit' : ''}`}>
                            <img src={skills[currentSlide].icon} alt={skills[currentSlide].name} className='w-40' />
                            <br />
                            <p className='text-white text-2xl'>{skills[currentSlide].name}</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <button onClick={nextSlide} className="bg-gray-800 text-white px-4 py-2 rounded mb-28 aboutme-card-button">Slide Me</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAndSkillSection;
