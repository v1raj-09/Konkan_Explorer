import React from 'react';
import HeroHeader from '../components/HeroHeader';
import StatsStrip from '../components/StatsStrip';
import FestivalsSection from '../components/FestivalsSection';
import TrendingSection from '../components/TrendingSection';
import SiteFooter from '../components/SiteFooter';
import DestinationFilterSection from '../components/DestinationFilterSection';


function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col justify-between">
      <div>
           
        <HeroHeader />
         
        <StatsStrip />
     
       
        <TrendingSection />

      
      </div>
      <SiteFooter />
    </div>
  );
}

export default Home;



