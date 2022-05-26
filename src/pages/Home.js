import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductShowcase from '../components/ProductShowcase'
import Header from '../components/common/header'
import FeelSpecial from '../components/FeelSpecial'
import CredExperience from '../components/CredExperience'
import CredSecurity from '../components/CredSecurity'
export const Home = () => {
  return (
   <>
   <Header/>
   <HeroSection />
   <ProductShowcase />
   <FeelSpecial/>
   <CredExperience/>
   <CredSecurity/>
   </>
  )
}
