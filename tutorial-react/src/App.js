import './App.css';
import { NavBar } from './components/navbar';
import { Banner } from './components/banner';
import { Skills } from './components/skills';
import { Education } from './components/education';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
