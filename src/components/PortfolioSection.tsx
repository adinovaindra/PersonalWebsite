const Video = '/videodudu2.mp4';

import { useEffect, useRef } from 'react';

const PortfolioSection = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            console.log('Video element:', videoRef.current);
            videoRef.current.addEventListener('error', (event) => {
                console.error('Video error:', event);
            });
        }
    }, []);

    return (
        <div id='portfolio' className="portfolio-section relative">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover grayscale-video"
                autoPlay
                loop
                muted
                src={Video}
                onError={() => console.log("Video failed to load. Fallback message: Your browser does not support the video.")}
            >
                Your browser does not support the video.
            </video>
            <div className="portfolio-content container mx-auto p-8">
                <div className="portfolio-card bg-white rounded-lg shadow-md p-6 mb-6">
                    <h1 className="text-3xl font-bold mb-4 text-gray-300 text-center">⚡ PORTFOLIO ⚡</h1>
                </div>
                <div className="portfolio-card bg-white rounded-lg shadow-md p-6 mb-6 text-gray-300">
                    <h2 className="text-2xl font-bold mb-2">E-commerce Platform for XYZ Retail</h2>
                    <p><strong>Technologies:</strong> React, Node.js, MongoDB, AWS</p>
                </div>

                <div className="portfolio-card bg-white rounded-lg shadow-md p-6 mb-6 text-gray-300">
                    <h3 className="text-xl font-bold mb-2 ">Situation:</h3>
                    <p>
                        XYZ Retail, an established retail company, wanted to expand into e-commerce. They needed a platform that could support a large number of customers and provide essential features like product browsing, real-time inventory updates, and a secure checkout system.
                    </p>
                </div>

                <div className="portfolio-card bg-white rounded-lg shadow-md p-6 mb-6 text-gray-300">
                    <h3 className="text-xl font-bold mb-2">Task:</h3>
                    <p>
                        I was responsible for building both the front-end and back-end components of the platform. This included ensuring seamless integration with the client's inventory and payment systems, as well as optimizing performance for high traffic.
                    </p>
                </div>

                <div className="portfolio-card bg-white rounded-lg shadow-md p-6 mb-6 text-gray-300">
                    <h3 className="text-xl font-bold mb-2">Action:</h3>
                    <ul className="list-disc pl-5 text-gray-300">
                        <li>Developed the front-end with <strong>React</strong>, focusing on responsive design and user experience.</li>
                        <li>Implemented back-end APIs with <strong>Node.js</strong> and integrated data storage with <strong>MongoDB</strong>.</li>
                        <li>Optimized performance using <strong>AWS</strong> services and set up a <strong>CI/CD pipeline</strong> using Jenkins for efficient deployment.</li>
                        <li>Collaborated with designers and QA to ensure a high-quality, accessible platform.</li>
                    </ul>
                </div>

                <div className="portfolio-card bg-white rounded-lg shadow-md p-6 mb-6 text-gray-300">
                    <h3 className="text-xl font-bold mb-2">Result:</h3>
                    <p>
                        - Increased online sales by <strong>35%</strong> in the first three months.
                    </p>
                    <p>
                        - Received positive feedback for the platform's <strong>speed</strong> and <strong>usability</strong>.
                    </p>
                    <p>
                        - Reduced manual inventory management tasks significantly through real-time data updates.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
