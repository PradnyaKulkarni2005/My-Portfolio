import React from 'react'
import styles from "./Intro.module.css"
const Intro =()=> {
  return (
    <section className={styles.container}>
        <div className={styles.content}><h1 className={styles.title}>Hii, I'm Pradnya!</h1>
        <p className={styles.description}> A passionate programmer dedicated to crafting the simplest and most effective solutions to complex problems. Currently pursuing a B.Tech in Information Technology at PCCOE Pune, I am always eager to innovate and optimize. Explore my journey and discover how I blend creativity with technology to transform ideas into reality.</p>
        <a href="mailto:kulkarnipradnya1245@gmail.com" className={styles.contactBtn}>Contact me</a></div>
        {/* <img src="https://drive.google.com/uc?export=view&id=1tiJyURz4eWuZ_GtzEnk0fqNOV0icSw_0" alt="Pradnya Kulkarni" className={styles.myImg}/>  */}
       
        <a className={styles.introimg} href="https://ibb.co/jwRLmP5"><img  src="https://i.ibb.co/DMp7hHb/IMG-20240903-161020.jpg" alt="IMG-20240903-161020" border="0"/></a>
        
      
      <div className={styles.topBlur}></div> 
      <div className={styles.bottomBlur}></div>
    </section>
  )
}
export default Intro;
