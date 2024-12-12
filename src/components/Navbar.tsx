const Navbar = () => {
    return (
        <nav className=" navbar h-auto p-4 bg-transparent navbar shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex flex-col md:flex-row mx-auto space-y-4 md:space-y-0 md:space-x-14">
                    <li><a href="#hero" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                    <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Me</a></li>
                    <li><a href="#skills" className="text-gray-400 hover:text-white transition duration-300">Skills</a></li>
                    <li><a href="#portfolio" className="text-gray-400 hover:text-white transition duration-300">Portfolio</a></li>
                    <li><a href="#experience" className="text-gray-400 hover:text-white transition duration-300">Experience</a></li>
                    <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
