import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductShowcase from '../components/ProductShowcase'
import Header from '../components/common/header'
import FeelSpecial from '../components/FeelSpecial'
import CredExperience from '../components/CredExperience'
import CredSecurity from '../components/CredSecurity'
import BrandsLove from '../components/BrandsLove'
import WindowPeek from '../components/WindowPeek'
import MobileScroll from '../components/MobileScroll'
import CredStory from '../components/CredStory'
import AppRating from '../components/AppRating'
import Footer from '../components/Footer'
export const Home = () => {
  return (
   <>
   <Header/>
   <HeroSection />
   <ProductShowcase />
   <FeelSpecial/>
   <BrandsLove/>
   <CredExperience/>
   <MobileScroll/>
   <div className="non-mobile">
   <WindowPeek/>
   </div>
   <CredSecurity/>
   <CredStory/>
   <AppRating/>
   <Footer/>
   </>
  )
}
