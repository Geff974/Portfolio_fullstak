import Head from 'next/head'
import { useState } from 'react'
import AboutMe from '../components/AboutMe'
import Contact from '../components/contact/Contact'
import Footer from '../components/Footer'
import HeaderContent from '../components/Header/HeaderContent'
import Navbar from '../components/Header/Navbar'
import Services from '../components/services/Services'
import Skills from '../components/skills/Skills'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [themeMode, setThemeMode] = useState('');

  return (
    <div>
      <Head>
        <title>CODAID - Geffrey</title>
        <meta name="description" content="Portfolio Geffrey SAID" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main + ` ${themeMode}`}>
        <div className={styles.header}>
          <Navbar setTheme={setThemeMode} themeMode={themeMode} />
          <HeaderContent />
        </div>
        <AboutMe />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </main>
      
    </div>
  )
}
