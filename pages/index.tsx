import Hero from '@/components/Hero'
import HomeBanner from '@/components/HomeBanner'
import HomeEmployerSection from '@/components/HomeEmployerSection'
import HomeJobSection from '@/components/HomeJobSection'
import ProfileSection from '@/components/ProfileSection'
import ThreeBoxedGrid from '@/components/ThreeBoxedGrid'
import React from 'react'

const index = () => {
  return (
    <>
      <Hero/>
      <ThreeBoxedGrid/>
      <HomeBanner/>
      <HomeJobSection />
      <HomeEmployerSection/>
      <ProfileSection/>
    </>
  )
}

export default index