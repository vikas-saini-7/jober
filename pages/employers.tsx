import PageHeader from '@/components/PageHeader'
import TopEmployers from '@/components/TopEmployers'
import React from 'react'

const pageNames = ['home', 'employers']

const employers = () => {
  return (
    <div>
        <PageHeader
            pageNames={pageNames}
            heading='Top Employers'
            description='View our top employers on our portal'
        />
        <TopEmployers/>
    </div>
  )
}

export default employers