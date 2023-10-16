import React from 'react';
import { styles, layout } from "./style"; // Check the import path
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import FeedbackCard from './components/FeedbackCard';
import CTA from './components/CTA';
import Clients from './components/Clients';
import CardDeal from './components/CardDeal';
import Button from './components/Button';
import Business from './components/Business';
import Billing from './components/Billing';

const App = () => {
  return (

    <div className = "bg-primary w-full overflow-hidden"> 
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats/>
            <Business/>
            <Billing/>
            <CardDeal/>
            <Testimonials/>
            <Clients/>
            <CTA />
            <Footer/>
          </div>
      </div>



    </div>


  )
}

export default App