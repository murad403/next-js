// import styles from "./About.module.css"
import { Metadata } from 'next'

export const metadata: Metadata ={
  title: "About page",
  description: "About page description"
}


const AboutPage = () => {
  return (
    <div>
      {/* <h1 className={`${styles.heading} text-center`}>about page</h1> */}
      <h2>about poge</h2>
    </div>
  )
}

export default AboutPage
