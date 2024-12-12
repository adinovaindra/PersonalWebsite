import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutAndSkillSection from './components/AboutAndSkillSection';
import PortfolioSection from './components/PortfolioSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutAndSkillSection />
            <PortfolioSection />
            <ExperienceSection />
            <TestimonialsSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
}

export default App;
