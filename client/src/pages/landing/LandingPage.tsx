import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Announcements from "./components/sections/Announcements";
import About from "./components/sections/About";
import HowItWorks from "./components/sections/HowItWorks";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import { ThemeProvider } from "../../context/ThemeContext";

const LandingPage: React.FC = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const openLogin = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  const openRegister = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  const scrollToFlyers = () => {
    document
      .getElementById("flyers")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ThemeProvider>
      <div className="font-sans bg-[#F7FAF9] dark:bg-[#0A1A17] text-[#1E2423] dark:text-[#E8F5F3] overflow-x-hidden transition-colors duration-300">
        <Navbar onLoginClick={openLogin} onSignupClick={openRegister} />

        <main>
          <Hero
            onSignupClick={openRegister}
            onLearnMoreClick={scrollToFlyers}
          />
          <Features/>
          <Announcements onSignupClick={openRegister} />
          <About />
          <HowItWorks onSignupClick={openRegister} onLoginClick={openLogin} />
        </main>

        <Footer onLoginClick={openLogin} onSignupClick={openRegister} />

        <LoginModal
          isOpen={loginOpen}
          onClose={() => setLoginOpen(false)}
          onSwitchToSignup={openRegister}
        />

        <RegisterModal
          isOpen={registerOpen}
          onClose={() => setRegisterOpen(false)}
          onSwitchToLogin={openLogin}
        />
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
