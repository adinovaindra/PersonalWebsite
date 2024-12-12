import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Video from '/videodudu2.mp4';
import { useState } from 'react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contactbox relative py-16 text-white" id="contact">
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
      <div className="mx-auto px-4 relative">
        <h2 className="testimonialbox title text-3xl font-bold mb-8 text-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg text-center">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <form onSubmit={handleSubmit} className="contactbox p-8 rounded shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-400 hover:text-gray-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 text-center">
            <p className="text-gray-300 mb-4">Or reach out directly:</p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:adinovapramono@yahoo.co.id"
                className="text-white hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email
              </a>
              <a
                href="https://linkedin.com/in/adinova-indra-permana-88b071247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/adinovaindra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
              </a>
            </div>
            <div className="mt-4">
              <button
                className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-400 hover:text-gray-700 transition duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
