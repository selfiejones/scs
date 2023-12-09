import React from 'react'
import styles from './styles'
import {Navbar,Hero,AboutUs,CoolRoofCoating,WeAreLive,Certification,OurProducts,Gallery,Branches,ContactUs,Footer} from './components';

const App = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutUs/>
        <CoolRoofCoating/>
        <WeAreLive/>
        <OurProducts/>
        <Gallery/>
        <Branches/>
        <ContactUs/>
        <Footer/>
      </div>
    </div>
    </div>
  )
}

export default App