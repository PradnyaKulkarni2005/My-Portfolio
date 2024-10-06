// import React, { useState } from 'react';
import styles from "./App.css";
import './App.css';
// import Information from './Components/Information';
// import About from './Components/About';
// import Achievements from './Components/Achievements' ;
import Navbar from './Components/Navbar';
import Intro from './Components/Intro/Intro.jsx';
import About from './Components/About/About.jsx';
import Achievement from './Components/Achievement/Achievement.jsx';
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";



// function App() {
//   // State to keep track of the currently selected tab
//   const [selectedTab, setSelectedTab] = useState('Information');

//   // Function to render the selected component based on state
//   const renderComponent = () => {
//     switch (selectedTab) {
//       case 'About':
//         return <About />;
//       case 'Achievements':
//         return <Achievements />;
//       default:
//         return <Information />;

       
//     }
//   };

//   return (
//     <div className={styles.App}>
//       {/* <Navbar setSelectedTab={setSelectedTab}/> */}
//       <Navbar />
//       {/* {renderComponent()} */}
//     </div>
//   );
// }
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
