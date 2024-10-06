import React from 'react'
import styles from "./About.module.css"
export default function About() {
  return (
    <section className={styles.box} id='about'>
       <h2 className={styles.title}>About</h2>
        <div className={styles.out}>
        
       <div className={styles.cardContainer}>
  <div className={styles.card}>
    <p className={styles.city}>My Journey</p>
    <div class={styles.weather}>
    <p>My coding journey includes:</p>
    <ol>
        <li><strong>Programming Foundations:</strong>
            <ul>
                <li>Started with <strong>C</strong>.</li>
                <li>Learned the basics of programming.</li>
            </ul>
        </li>
        <li><strong>Advanced Languages:</strong>
            <ul>
                <li>Explored <strong>Python</strong> and <strong>C++</strong>.</li>
                <li>Worked on complex problems.</li>
            </ul>
        </li>
        <li><strong>Current Focus:</strong>
            <ul>
                <li>Mastering <strong>Data Structures and Algorithms</strong> in <strong>C++</strong>.</li>
            </ul>
        </li>
        <li><strong>Web Development:</strong>
            <ul>
                <li>Built projects using <strong>HTML, CSS, and JavaScript</strong>.</li>
                <li>Currently learning <strong>React</strong>.</li>
            </ul>
        </li>
    </ol>
</div>
</div>
</div>
<div className={styles.cardContainer}>
  <div className={styles.card}>
    <p className={styles.city}>My Skills</p>
    <p className={styles.weather}><h2>Programming Languages</h2>
    <ul><li>C</li>
    <li>C++</li>
    <li>Python</li>
    <li>Java</li></ul><br /><br />
    <h2>Web Development</h2>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>React js</li>
    </p></div>
</div>
<div className={styles.cardContainer}>
  <div className={styles.card}>
    <p className={styles.city}>Hobbies</p>
    <p className={styles.weather}>
    <h5>Outside of work, I love to:</h5>
    <ul>
        <li><strong>Singing:</strong> I enjoy singing with friends and at events. It brings me joy and helps me relax.</li>
        <li><strong>Painting and Drawing:</strong> I like painting and drawing. It's a great way to express my feelings and creativity.</li>
        <li><strong>Art and Craft:</strong> I have fun making DIY projects. I love turning simple materials into something beautiful.</li>
        <li><strong>Cooking:</strong> I like trying out new recipes. Cooking allows me to explore different flavors and share meals with loved ones.</li>
        <li><strong>Gardening:</strong> I enjoy planting trees and taking care of plants. Gardening helps me connect with nature and create a greener space.</li>
    </ul>
    
</p>
</div>
</div>


    </div>

    </section>
  )
}
