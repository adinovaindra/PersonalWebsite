import Video from "/videodudu2.mp4";
import Client1 from './../assets/loyalcustomer.png'
import Client2 from './../assets/secondcustomer.jpg';
import Client3 from './../assets/mia.jpeg';

const TestimonialsSection = () => {
    return (
        <section id='testimonials' className="testimonials p-8 relative">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                src={Video}
                onError={() => console.log("Video failed to load. Fallback message: Your browser does not support the video.")}
            >
                Your browser does not support the video.
            </video>
            <h2 className="testimonialbox title text-3xl font-bold mb-8 text-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105 text-center">TESTIMONIALS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="testimonialbox  rounded-lg shadow-md p-6 mb-6 transition duration-300 ease-in-out transform hover:scale-105">
                    <img src={Client1} alt="Client 1" className="w-20 h-20 rounded-full mb-4" />
                    <p className="italic text-gray-300">"The quality of work was outstanding! Highly recommend!"</p>
                    <p className="font-semibold text-gray-400 mt-2">- Pahmi Ardiansyah</p>
                </div>
                <div className="testimonialbox  rounded-lg shadow-md p-6 mb-6 transition duration-300 ease-in-out transform hover:scale-105">
                    <img src={Client2} alt="Client 2" className="w-20 h-20 rounded-full mb-4" />
                    <p className="italic text-gray-300">"A true professional who delivered on time and exceeded expectations."</p>
                    <p className="font-semibold text-gray-400 mt-2">- Melannie Rebecca</p>
                </div>
                <div className="testimonialbox  rounded-lg shadow-md p-6 mb-6 transition duration-300 ease-in-out transform hover:scale-105">
                    <img src={Client3} alt="Client 3" className="w-20 h-20 rounded-full mb-4" />
                    <p className="italic text-gray-300">"Their attention to detail and communication made the project a success."</p>
                    <p className="font-semibold text-gray-400 mt-2">- Maria Rodriguez</p>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
