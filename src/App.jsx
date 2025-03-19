import styles from "./App.css";
import './App.css';

import Navbar from './Components/Navbar';
import Intro from './Components/Intro/Intro.jsx';
import About from './Components/About/About.jsx';
import Achievement from './Components/Achievement/Achievement.jsx';
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";

function App(){
  return(
    <div>
    <div className={styles.App}>
    <Navbar/>
    <Intro/>
    <About/>
    <Achievement/>
    <Projects/>
    <Contact/>
    </div>
</div>
  );
}

export default App;
