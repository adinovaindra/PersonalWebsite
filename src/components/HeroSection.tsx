import { motion } from 'framer-motion';
import Video from "/videodudu2.mp4";
import ProfilePhoto from "./../assets/profileoke.png"; // Replace with the actual path to your profile photo

const HeroSection = () => {
    return (
        <section className="hero relative flex flex-col items-center justify-center h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full min-h- object-cover grayscale"
                autoPlay
                loop
                muted
                src={Video}
                onError={() => console.log("Video failed to load")}
            >
                <source src="./../assets/videodudu2.mp4" type="video/mp4" />
                Your browser does not support the video.
            </video>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white p-8">
                <div className="mb-8">
                    <motion.img
                        src={ProfilePhoto}
                        alt="Profile Photo"
                        className="w-64 rounded-full -mt-12 mx-auto border-white shadow-lg grayscale"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <div className="title">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Adinova Indra Permana
                    </motion.h1>
                    <motion.h2
                        className="text-2xl md:text-3xl mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        FullStack Developer | Web Developer
                    </motion.h2>
                    <p className="mb-10">Innovative web developer also committed to building engaging and user friendly digital solutions.</p>
                </div>
                <div>
                    <motion.a
                        href="https://wa.me/6282214383335?text=Hi!%20I'm%20interested%20to%20hire%20you.%20Can%20we%20talk%20about%20it%3F"
                        className="text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 mr-4 aboutme-card-button"
                        whileHover={{ scale: 1.05 }}
                    >
                        Hire Me !
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 aboutme-card-button"
                        whileHover={{ scale: 1.05 }}
                    >
                        Contact Me
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
