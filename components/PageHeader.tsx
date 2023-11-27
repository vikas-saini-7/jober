import { PageHeaderProps } from '@/types'
import React from 'react'
import Breadcrumb from './Breadcrumb'

// const pageNames =['home', 'jobs']

const PageHeader = ({pageNames, heading, description} : PageHeaderProps ) => {
  return (
    <section className="bg-cover bg-center py-16 m-4 rounded-lg bg-black" style={{ backgroundImage: 'url("/images/header-bg.jpg")' }}>
      <div className="container mx-auto text-white px-8  md:px-24 ">
        <Breadcrumb pageNames={pageNames} />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase">{heading}</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300">{description}</p>
      </div>
    </section>
  )
}

export default PageHeader