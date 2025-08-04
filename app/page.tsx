'use client';

import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

import React from 'react'

const Page = () => {
  const { isSignedIn } = useUser()
  const router = useRouter()

  if (!isSignedIn) {
    router.push('/sign-in')
  }
  return (
    <main className='py-9'>
      <h1>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          id='123'
          name='Neury The Brain Explorer'
          topic='Neural Networks of the Brain'
          subject='science'
          duration={45}
          color='#ffda6e' 
        />
        <CompanionCard
          id='456'
          name='Countsy the number wizard'
          topic='Derivatives & Integrals'
          subject='maths'
          duration={30}
          color='#e5d0ff' 
        />
        <CompanionCard
          id='789'
          name='Coding the Logical Hacker'
          topic='DSA & System Design'
          subject='coding'
          duration={55}
          color='#ffda6e' 
        />
      </section>

      <section className='home-section'>
        <CompanionsList
          title='Recently Completed Sessions'
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page