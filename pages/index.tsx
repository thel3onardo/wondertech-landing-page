import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { EventGoalSection } from '../components/EventGoalSection'
import { MainInfo } from '../components/MainInfo'
import { SponsorsSection } from '../components/SponsorsSection'

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Head>
      <title>Wondertech 2022 | 13 de maio de 2022</title>
      </Head>
      <MainInfo />
      <SponsorsSection />
      <EventGoalSection />  
    </Flex>
  )
}

export default Home
