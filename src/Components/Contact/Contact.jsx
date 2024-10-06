import React from 'react'
import style from "./Contact.module.css"

const Contact = () => {
  return (
    <footer className={style.end} id='contact'>
        <div className={style.contact}>
        <h1 className={style.title}>Contact</h1><br />
      <a href='https://www.linkedin.com/in/pradnya-kulkarni-8b92b42b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '><button className={style.btn}>Linkedin</button></a>
      <a href="mailto:kulkarnipradnya1245@gmail.com"><button className={style.btn} >Email</button></a>

      </div>

    </footer>
  )
}

export default Contact
