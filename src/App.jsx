// App.jsx
import ThemeToggle from './components/ThemeToggle';
<<<<<<< HEAD
<<<<<<< HEAD
import Header from './components/Navbar';
import Introduction from './components/Introduction';
=======
import Header from './components/Header';
>>>>>>> b6f3ed2 (initial commit)
=======
import Header from './components/Navbar';
import Introduction from './components/Introduction';
>>>>>>> 6cf278c (wip: add navbar but fix it)
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Competencies from './components/Competencies';
import ResearchInterests from './components/ResearchInterests';
import AITools from './components/AITools';
import Contact from './components/Contact';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const profileImage = "https://imgur.com/a/C9GYhI9";

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-100 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-white transition-colors duration-300">
        {/* <ThemeToggle /> */}
<<<<<<< HEAD
<<<<<<< HEAD
       
        <Header />
        <Introduction profileImage={profileImage} />
=======
        <Header profileImage={profileImage} />
>>>>>>> b6f3ed2 (initial commit)
=======
       
        <Header />
        <Introduction profileImage={profileImage} />
>>>>>>> 6cf278c (wip: add navbar but fix it)
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Certifications />
        <Competencies />
        <ResearchInterests />
        <AITools />
        <Contact />
        <ThankYou />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
