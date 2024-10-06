import React from 'react'
import styles from "./Achievement.module.css"
import achievements from "../../data/achievements.json"
const Achievement = () => {
  return (
    <section id='achievements' className={styles.container}>
        <h2 className={styles.title}>My Achievements</h2>
        <div className={styles.wrap}>
        <div className={styles.left}>
            <img className={styles.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCq9jjAzeHvMFAlh1GMpgRyD90OJpGh5kvw&s" alt="" />
            <img className={styles.logo} src="https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png" alt="" />
            <img className={styles.logo} src="https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-1713885634631.webp" alt="" />
            <img className={styles.logo} src="https://e7.pngegg.com/pngimages/510/15/png-clipart-java-programming-computer-programming-programming-language-android-coffee-jar-text-logo.png" alt="" />
        </div>
        <div className={styles.content}>
            <div className={styles.skills}>
            {achievements.map((skill, id) => {
  if (!skill.title || !skill.imgSrc) return null;  // Skip if title or image is missing

  return (
    
    <div key={id} className=''>
        
      <div>
        <img src={skill.imgSrc} alt={skill.title} />
      </div>
      <p>{skill.title}</p>
    </div>
  );
})}

            </div>
        </div>
        <div className={styles.right}>
            <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="" />
            <img className={styles.logo} src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png" alt="" />
            <img className={styles.logo} src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" alt="" />
            <img className={styles.logo} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
        </div>
        </div>
    </section>
  )
}

export default Achievement
